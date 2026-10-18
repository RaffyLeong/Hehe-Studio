import { addListener, createSession, createViewport, MaterialStandardData, viewports, VISIBILITY_MODE, EVENTTYPE_INTERACTION } from '@shapediver/viewer' 
import { useEffect, useRef, useState} from 'react'
import { InteractionData, InteractionEngine, SelectManager, HoverManager } from '@shapediver/viewer.features.interaction'

const ShTestViewer = ({My_Ticket, My_Model_View_URL, parameterName}) => {
   
    const [showHeight, setShowHeight] = useState(false)


    const canvasRef = useRef(null)
    const initialized = useRef(false)
    const refs = useRef({})

    const initViewer = async () => {
        const viewport = await createViewport({
        id: 'shapediver-viewport',
        canvas: canvasRef.current,
        visibility: VISIBILITY_MODE.SESSION,
        branding: {
            logo: "/logo2.png",
            backgroundColor: "#efe5d3"
        }
        })

    


        const session = await createSession({
        id: 'shapediver-session',
        ticket: My_Ticket,
        modelViewUrl: My_Model_View_URL
        })
        
        console.log(Object.values(session.parameters).map(p => p.name))

        const interactionEngine = new InteractionEngine(viewport);

        const selectManager = new SelectManager();
        const hoverManager = new HoverManager()
        selectManager.deselectOnEmpty = true
        

        selectManager.effectMaterial = new MaterialStandardData({color: "#3baa37"});
        interactionEngine.addInteractionManager(selectManager);
        hoverManager.effectMaterial = new MaterialStandardData({color: "#b9dfb7"});
        interactionEngine.addInteractionManager(hoverManager);

        const selectOnToken = addListener(EVENTTYPE_INTERACTION.SELECT_ON, (e) => {
            if (e.node?.name === "SideShelf") setShowHeight(true)
            const node = e.node;
            console.log("SELECT_ON", node?.name);

            const api = node.data.find(d => d instanceof OutputApiData)?.api;
            console.log(api);

        });
        const selectOffToken = addListener(EVENTTYPE_INTERACTION.SELECT_OFF, () => {
            console.log("SELECT_OFF — deselected")
        });


        //for (let i = 0; i < session.node.children.length; i++){
        //session.node.children[i].data.push(new InteractionData({hover: true, select: true}));
        //session.node.children[i].updateVersion();
        //}


        for (let o in session.outputs) {
            const output = session.outputs[o];
        

            output.updateCallback = (newNode, oldNode) => {
                if(!newNode) return;
                newNode.data.push(new InteractionData({select: true, hover: true}));
                newNode.updateVersion();
            }

            output.updateCallback(output.node);
        }

        console.log(session)
        
        //const outputHeight = session.getOutputByName("outputHeight")
        //for (const output of outputHeight) {
        //    output.node.data.push(new InteractionData ({hover: true, select: true}))
        //    output.node.updateVersion();
        //}



        //const walk = (node, depth = 0) => {
        //console.log("  ".repeat(depth) + (node.name || "(unnamed)"))
        //node.children.forEach((child) => walk(child, depth + 1))
        //}
        //walk(session.node)
        
        //console.log("outputs:", session.outputs)
        //console.log("node children:", session.node.children)

        refs.current = {
            viewport,
            session, interactionEngine, selectOnToken, selectOffToken
        }
    }


   


    
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;
        initViewer();

        return () => {
            const { 
                session, viewport, 
            } = refs.current;
            
            session?.close?.();
            viewport?.close?.();
        }
    }, [])

    return (
        <div className="relative w-full h-full min-h-[500px] rounded-md overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full border-0"
                title="ShapeDiver Model"/>
        </div>
        )
}

export default ShTestViewer