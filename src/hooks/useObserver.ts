
import { useEffect, useRef} from "react";




export const useObserver = (ref:any,isLoading:boolean,endFilm:boolean,change:string, callback:any) => {
    const observer:any = useRef();

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        var cb = function(entries:any, observer:any) {
            if (entries[0].isIntersecting && !endFilm ) {
              callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading,endFilm,change])
}