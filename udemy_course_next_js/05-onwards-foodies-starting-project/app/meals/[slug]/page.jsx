export default function meal_share_dynamic_page({params}){
    return <main>
        <h1>I am meal - dynamic route page</h1>
        <h2>dynmic route : {params.slug}</h2>
        </main>
}