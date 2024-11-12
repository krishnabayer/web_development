import { notFound } from "@/node_modules/next/navigation"
export default function Productsreviewiddetails({params}){
    if ( parseInt(params.reviewid)>1000){
         notFound();
    }

    return <>
    <h1>products review {params.reviewid}</h1>
   
    </>
}