// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getPageBySlug } from "../Services/wordpress";

// function Page() {
//   const { slug } = useParams();
//   const [page, setPage] = useState(null);

//   useEffect(() => {
//     getPageBySlug(slug)
//       .then((res) => {
//         setPage(res.data[0]);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [slug]);

//   if (!page) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{page.title.rendered}</h1>

//       <div
//         dangerouslySetInnerHTML={{
//           __html: page.content.rendered,
//         }}
//       />
//     </div>
//   );
// }

// export default Page;
