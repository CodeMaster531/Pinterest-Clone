import GalleryItem from "../galleryItem/galleryItem";
import "./gallery.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const fetchPins = async ({ pageParam, search, userId,boardId}) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${search || ""}&userId=${userId || ""}&boardId=${boardId || ""}`,
  );
  return res.data;
};
const Gallery = ({ search , userId , boardId}) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins" ,search],
    queryFn: ({pageParam=0})=>fetchPins({pageParam, search, userId, boardId}),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>Something went wrong</div>;

  console.log(data);

  const allPins = data?.pages.flatMap((page) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>You have seen it all</b>
        </p>
      }
    >
      <div className="gallery">
        {allPins?.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
