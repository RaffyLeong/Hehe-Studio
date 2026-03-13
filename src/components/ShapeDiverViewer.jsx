import { useEffect, useRef } from 'react'

const ShapeDiverViewer = ({ modelUrl, ticket, onLoad, onError }) => {
    const iframeRef = useRef(null)

    useEffect(() => {

    }, [])
  return (
    <div className="w-full h-full min-h-[500px] rounded-md overflow-hidden">
      <iframe
        ref={iframeRef}
        src={`${modelUrl}?ticket=${ticket}`}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="ShapeDiver Model"
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  )
}

export default ShapeDiverViewer