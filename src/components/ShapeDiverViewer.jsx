import { useEffect, useRef } from 'react'
import { createSession, createViewport } from '@shapediver/viewer' 
import { InteractionEngine, SelectManager, InteractionData, HoverManager } from '@shapediver/viewer.features.interaction' 
import { MaterialStandardData } from '@shapediver/viewer'

const ShapeDiverViewer = ({ modelUrl, ticket, onLoad, onError, onSelect }) => {
    const canvasRef = useRef(null)
    const viewportRef = useRef(null)
    const sessionRef = useRef(null)
    const isMountedRef = useRef(true)

    useEffect(() => {
        isMountedRef.current = true

        const initViewer = async () => {
            try {
                if (!canvasRef.current || !isMountedRef.current) return

                console.log('Initializing ShapeDiver viewer...')

                // 1. Create viewport
                const viewport = await createViewport({
                    canvas: canvasRef.current,
                    id: 'shapediver-viewport',
                })
                
                if (!isMountedRef.current) {
                    viewport.dispose()
                    return
                }
                viewportRef.current = viewport
                console.log('Viewport created')

                // 2. Create session
                const session = await createSession({
                    ticket: ticket,
                    modelViewUrl: 'https://sdr8euc1.eu-central-1.shapediver.com',
                    id: 'shapediver-session',
                })
                
                if (!isMountedRef.current) {
                    session.close()
                    viewport.dispose()
                    return
                }
                sessionRef.current = session
                console.log('Session created')

                // 3. Setup interactions
                const interactionEngine = new InteractionEngine(viewport)

                const hoverManager = new HoverManager()
                hoverManager.effectMaterial = new MaterialStandardData({ color: '#0066ff' })
                interactionEngine.addInteractionManager(hoverManager)

                const selectManager = new SelectManager()
                selectManager.effectMaterial = new MaterialStandardData({ color: '#ffaa00' })
                interactionEngine.addInteractionManager(selectManager)

                // 4. Add interactions to nodes
                const addInteractionToNodes = (node) => {
                    if (node && node.data) {
                        node.data.push(new InteractionData({ hover: true, select: true }))
                        node.updateVersion()
                    }
                    if (node && node.children) {
                        node.children.forEach(child => addInteractionToNodes(child))
                    }
                }

                addInteractionToNodes(session.node)
                console.log('Interactions added to nodes')

                // 5. Event listeners
                hoverManager.eventEmitter.on('hover', (event) => {
                    console.log('Hovering over:', event?.node?.name)
                    if (canvasRef.current && isMountedRef.current) {
                        canvasRef.current.style.cursor = 'pointer'
                    }
                })

                hoverManager.eventEmitter.on('unhover', () => {
                    if (canvasRef.current && isMountedRef.current) {
                        canvasRef.current.style.cursor = 'default'
                    }
                })

                selectManager.eventEmitter.on('select', (event) => {
                    console.log('Selected:', event?.node?.name)
                    if (onSelect && isMountedRef.current) onSelect(event)
                })

                if (onLoad && isMountedRef.current) {
                    onLoad()
                }
                console.log('ShapeDiver viewer fully initialized!')

            } catch (err) {
                console.error('ShapeDiver init error:', err)
                if (onError && isMountedRef.current) onError(err)
            }
        }

        initViewer()

        // IMPORTANT: Cleanup function - properly destroy everything
        return () => {
            console.log('Cleaning up ShapeDiver viewer...')
            isMountedRef.current = false
            
            // Close session first
            if (sessionRef.current) {
                try {
                    sessionRef.current.close()
                } catch (err) {
                    console.warn('Error closing session:', err)
                }
                sessionRef.current = null
            }
            
            // Then dispose viewport (this should clean up WebGL)
            if (viewportRef.current) {
                try {
                    // Force stop any ongoing rendering
                    if (viewportRef.current.renderer) {
                        viewportRef.current.renderer.stop()
                    }
                    viewportRef.current.dispose()
                } catch (err) {
                    console.warn('Error disposing viewport:', err)
                }
                viewportRef.current = null
            }
            
            // Finally, clear the canvas context
            if (canvasRef.current) {
                const canvas = canvasRef.current
                // Get WebGL context and lose it
                const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
                if (gl) {
                    const loseContext = gl.getExtension('WEBGL_lose_context')
                    if (loseContext) {
                        loseContext.loseContext()
                    }
                }
                // Clear canvas
                const ctx = canvas.getContext('2d')
                if (ctx) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                }
                // Remove canvas from DOM to be safe
                canvas.removeAttribute('style')
                canvas.width = 1
                canvas.height = 1
            }
            
            console.log('ShapeDiver viewer cleanup complete')
        }
    }, [ticket, onLoad, onError, onSelect])

    return (
        <div className="w-full h-full min-h-[500px] rounded-md overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full border-0"
                title="ShapeDiver Model"
            />
        </div>
    )
}

export default ShapeDiverViewer