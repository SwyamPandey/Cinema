import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../../utils/axios"
import Loding from "./Loding";
import VerticalsCARds from "./VerticalsCARds";
import DroDown from './DropDown'



const Trending = () => {
    document.title = "One For All | Trending"

    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`);
            
            if(data.results.length > 0) {
                setTrending((prev) => [...prev, ...data.results]);
                setPage((prev) => prev+1)   
            }
            else{
                setHasMore(false);
            }
        } catch (err) {
            setHasMore(false);
        }
    };

    const refreshHandler = async () => {
        if(trending.length === 0) {
            getTrending();
        }
        else{
            setPage(1);
            setTrending([])
            getTrending()
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category, duration]);

    return trending.length > 0 ? (
        <div className="bg-[#222831] min-h-screen">
            <div className=" flex justify-between items-center px-5 py-2">
                <div className="flex gap-1 items-center">
                    <span
                        onClick={() => navigate(-1)}
                        className="cursor-pointer text-4xl text-zinc-200 rounded-full w-10 h-10 flex justify-center items-center hover:text-white"
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </span>
                    <h1 className="text-xl text-zinc-200 font-bold">Trending</h1>
                </div>
                <TopNav />
                <DroDown
                    title={"Trending"}
                    options={["tv", "movie", "all"]}
                    func={(e) => setCategory(e.target.value)}
                    
                />
                <div className="w-5"></div>
                <DroDown
                    title={"Duration"}
                    options={["day", "week"]}
                    func={(e) => setDuration(e.target.value)}
                />
            </div>
            <hr className="border-zinc-500 " />

            <InfiniteScroll
                dataLength={trending.length}
                next={getTrending}
                hasMore={hasMore}
                loader={<h3 className="text-white">Loading</h3>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <VerticalsCARds data={trending} title={category} />
            </InfiniteScroll>
        </div>
    ): <Loding />;
};

export default Trending;
