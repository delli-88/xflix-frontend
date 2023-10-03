import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../App";
import{ Grid, 
    TextField,} from "@mui/material";
import VideoCard from "./Video";
import Genre from "./genre.js";
import Loading from "./Loading";
import Header from "./header";
import UploadPage from "./upload";
import SearchIcon from '@mui/icons-material/Search';
import { Button, Box } from "@mui/material";
// import "./Dashboard.css"

// Dashboard

const Dashboard = () => {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState("");
    const [loading,setLoading] = useState(false);

    const fetchVideoData = async () => {
        setLoading(true);
        try {
            const URL = `${config.endpoint}/videos`;

            const res = await axios.get(URL);
            setVideos(res.data.videos);
        }
        catch(err) {
            console.log(err);
        }
        setLoading(false);
    }
//search functiom
    const performSearch = async (searchKey) => {
        let URL = `${config.endpoint}/videos?title=${searchKey}`;
        if(searchKey.length === 0)
        {
            URL = `${config.endpoint}/videos`;
        }
    
        try {
            let searchedVideos = await axios.get(URL);
            console.log(searchedVideos);
            setVideos(searchedVideos.data.videos);
            console.log(videos);
        } catch(err) {
            if (err.response.status === 404) {
                setVideos([]);
            }
        }
    };

    // fetching the videos on page loads
    useEffect(() => {
        fetchVideoData();
    }, []);

    return (
        <div>
            <Header>
                <Box>
                    <TextField
                        size="small"
                        type="text"
                        name="search-box"
                        className="search-desktop"
                        placeholder="Search"
                        focused
                        sx={{width: 800}}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button 
                        variant="outlined" 
                        startIcon={<SearchIcon />} 
                        size="large" 
                        onClick={() => performSearch(search)}
                    >
                    </Button>
                </Box>
                <Box>
                    <UploadPage />
                </Box>
            </Header>

            <Genre  uniqueGenres={['All Genre', 'Education', 'Sports', 'Comedy', 'Lifestyle']} uniqueContentRating={['Any age group', '7+', '12+', '16+', '18+']} updateProducts={setVideos} search={search} />

            {loading ? <Loading /> :
                <Grid container rowSpacing={3} columnSpacing={1} pl={10} pr={10}>
                    {videos.map(
                        (video) => (
                            <Grid item xs={12} sm={6} md={3} key={video._id}>
                                <VideoCard videoData={video}/>
                            </Grid>
                        )
                    )} 
               </Grid>
            }
        </div>
    );
};

export default Dashboard;