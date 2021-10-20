import {useRef,useState,useEffect} from 'react';
//import video from '../video/seoul.mp4';
export const RefHook = () => {

    const [inputValue,setInputValue] = useState('');
    const inputRef = useRef();
    const videoRef = useRef();

    const [isCopied,setIsCopied]=useState(false);

    const handleFocus = () => {

        const input = inputRef.current;

             input.focus();
    }

    const handleCopy = () => {

        const input = inputRef.current;
        input.select();
        document.execCommand('copy  ');
        setIsCopied(true);

        setTimeout(()=>setIsCopied(false),2000)

    }

    const [isPlaying,setIsPlaying] = useState(false);
    const handlePlayVideo = () => {

        const video = videoRef.current;
        setIsPlaying(state => {
            if(state){
                video.pause();
                return !state;
            }
            video.play();
            return !state;
            
        });

    }

    const [color,setColor] = useState('pink');
    const divRef = useRef();
    const navRef = useRef();
    useEffect(()=>{
        const handleScroll = () => {
            const div = divRef.current;
            //const nav = navRef.current;
            const {y} = div.getBoundingClientRect();

            if(y<0){
                setColor('red')
            }else{
                setColor('pink')
            }

        }
        window.addEventListener('scroll',handleScroll);

        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[]);

    return (

        <>
            <h1>Ref screen</h1>
            <nav id='nav' ref={navRef} style={{width:'100%',height:'100px', backgroundColor:'orange'}}>
                barra de navegación
            </nav>

            <div ref={divRef} style={{height:'800px',backgroundColor:color}}>
                <h2>Scroll</h2>
            </div>

            {isCopied && <p>Texto copiado: {inputValue}</p>}
            <input 
                ref={inputRef}
                type="text"
                name="input"
                value={inputValue}
                placeholder="input"
                onChange={(e)=>{setInputValue(e.target.value)}} />

                <button
                    onClick={handleFocus}
                    >
                        Focus
                </button>

                <button
                    onClick={handleCopy}
                    >
                        Copy
                </button>

                <div style={{display:'flex', flexDirection:'column'}}>
                    <video style={{width:'400'}} ref={videoRef} onClick={handlePlayVideo} style={{cursor:'pointer'}}>
                        <source src="../video/seoul.mp4" type=""/>
                    </video>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <button onClick={handlePlayVideo}>{!isPlaying ? 'Play' : 'Pause'}</button>
                    
                    </div>
                </div>
        </>
    )
}