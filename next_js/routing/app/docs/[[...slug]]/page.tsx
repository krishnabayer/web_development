export default function docs_slug({params}){
    if (params.slug?.length===2){
        return <>
            <h1>docs here {params.slug[0]} and {params.slug[1]}, two element </h1>
        </>
    }
    else if (params.slug?.length===1){
        return <>
            <h1>docs here {params.slug[0]} , one element </h1>
        </>
    }
    
    return <>
            <h1>docs here  </h1>
        </>
     
    
}