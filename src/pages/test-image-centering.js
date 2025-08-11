export default function TestImageCentering() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Image Centering Test</h1>
            
            <div className="sb-markdown">
                <p>This is some text before the image.</p>
                
                <img 
                    src="/images/img-placeholder.svg" 
                    alt="Test image" 
                    className="my-4"
                    style={{border: '2px solid red'}}
                />
                
                <p>This is some text after the image.</p>
                
                <p>Another paragraph with another image:</p>
                
                <img 
                    src="/images/abstract-feature1.svg" 
                    alt="Test image 2" 
                    className="my-4"
                    style={{border: '2px solid blue'}}
                />
                
                <p>Final paragraph after the second image.</p>
            </div>
        </div>
    );
} 