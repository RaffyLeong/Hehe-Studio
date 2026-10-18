const ShapeDiverAppIframe = ({src, onLoad}) => (
    <div className="w-full h-full min-h-[500px] rounded-md overflow-hidden">
    <iframe
    src={src}
    title="ShapeDiver App"
    onLoad={onLoad}
    referrerPolicy="orgin"
    allowFullScreen
    className="w-full h-full border-0"
    style={{border: 0, overflow: "hidden"}}
    />
    </div>
);

export default ShapeDiverAppIframe;