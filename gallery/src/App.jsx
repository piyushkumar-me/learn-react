import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true); // true hona chahiye

  const getdata = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=15`
    );

    setdata((prev) => [...prev, ...res.data]);
    setpage((prev) => prev + 1);

    if (res.data.length === 0) sethasmore(false);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={getdata}
      hasMore={hasmore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more data</p>}
    >
      <div className="flex-wrap flex gap-6">
        {data.map((elem, idx) => {
          return (
            <div key={idx} className="">
              <a href={elem.download_url} className="">
                <img
                  src={elem.download_url}
                  alt=""
                  className="h-50 w-50"
                />
                <h4 className="font-bold">{elem.author}</h4>
              </a>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default App;
   
