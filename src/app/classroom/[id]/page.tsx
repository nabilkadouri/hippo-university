

export default function Page({ params }: { params: { id: string }}) {
    
    const { id } = params;


    return (
        <div>
            <p>Id du produit : {id}</p>
        </div>

        
    )
}