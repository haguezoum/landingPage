
    let options={
        root:null,
        rootMargin:'100px 0px',
        threshold:0.05
    }
    const observe  = new IntersectionObserver( 
        (entries,observe)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('active');
                    observe.unobserve(entry.target)
                }else{
                    entry.target.classList.remove('active');
                    console.log("hello world")
                }
            }),options
        }
    );
  
export default {

    bind(el){
        el.classList.add('befor-active');
        observe.observe(el)
    }
}