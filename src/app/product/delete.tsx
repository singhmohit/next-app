// "use client";

// export default function ProductDelete(props: { id: string }) {
//     const productdelete = (id: string) => {
//         fetch(`http://localhost:7001/product/${id}`, {
//             method: 'DELETE'
//         })
//         window.location.reload()
//     };

//     return (
//         <button className="font-bold border p-1 bg-red-700 text-gray-100"
//             onClick={() => productdelete(props.id)}>Delete</button>
//     );
// }