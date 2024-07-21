const getData = async (search = '') => {
  let query = search ? search : 'roast';
  let req = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=AIzaSyAwX4lDzDDngnL0V8JJxcq81FyJH94jmKw&maxResults=80`);
  let res = await req.json();

  let videoIds = res.items.map(item => item.id.videoId);
  let uniqueVideoIds = [...new Set(videoIds)];

  let videoDetailsReq = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${uniqueVideoIds.join(',')}&key=AIzaSyAwX4lDzDDngnL0V8JJxcq81FyJH94jmKw`);
  let videoDetailsRes = await videoDetailsReq.json();

  let channelIds = res.items.map(item => item.snippet.channelId);
  let uniqueChannelIds = [...new Set(channelIds)];

  let channelDetailsReq = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${uniqueChannelIds.join(',')}&key=AIzaSyAwX4lDzDDngnL0V8JJxcq81FyJH94jmKw`);
  let channelDetailsRes = await channelDetailsReq.json();

  let channelIcons = {};
  channelDetailsRes.items.forEach(channel => {
    channelIcons[channel.id] = channel.snippet.thumbnails.default.url;
  });

  console.log(videoDetailsRes);
  ShowData(res.items, videoDetailsRes.items, channelIcons);
}

const ShowData = (data, videoDetails, channelIcons) => {
  document.getElementById('data').innerHTML = '';

  let videoDetailsMap = videoDetails.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

  data.map((e) => {
    let videoDiv = document.createElement('div');
    videoDiv.className = 'video';

    videoDiv.onclick = () => {
      window.location.href = `video.html?videoId=${e.id.videoId}`;
    };

    let thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'thumbnail-container';

    let thumbnail = document.createElement('img');
    thumbnail.src = e.snippet.thumbnails.high.url;
    thumbnail.className = "imgs";
    thumbnailContainer.append(thumbnail);

    let detailsContainer = document.createElement('div');
    detailsContainer.className = 'details-container';

    let channelIcon = document.createElement('img');
    channelIcon.className = 'channel-icon';
    channelIcon.src = channelIcons[e.snippet.channelId];
    detailsContainer.append(channelIcon);

    let textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    let title = document.createElement('h3');
    title.className = 'video-title';
    title.textContent = e.snippet.title;
    textContainer.append(title);

    let channelTitle = document.createElement('p');
    channelTitle.className = 'channel-title';
    channelTitle.textContent = e.snippet.channelTitle;
    textContainer.append(channelTitle);

    let infoContainer = document.createElement('div');
    infoContainer.className = 'info-container';

    let uploadTime = document.createElement('p');
    uploadTime.className = 'upload-time';
    uploadTime.textContent = new Date(videoDetailsMap[e.id.videoId].snippet.publishedAt).toLocaleDateString();
    infoContainer.append(uploadTime);

    let views = document.createElement('p');
    views.className = 'views';
    views.textContent = `• ${Number(videoDetailsMap[e.id.videoId].statistics.viewCount).toLocaleString()} views`;
    infoContainer.append(views);

    textContainer.append(infoContainer);

    detailsContainer.append(textContainer);

    videoDiv.append(thumbnailContainer);
    videoDiv.append(detailsContainer);

    document.getElementById("data").append(videoDiv);
  });
}
const handleSearch = () => {
  const searchQuery = document.getElementById('searchInput').value;
  getData(searchQuery);
}

document.getElementById('searchInput').addEventListener('input', handleSearch);

window.addEventListener('load', () => {
  getData();
});

let sideBar = document.getElementById("sideBar");
let hamber = document.getElementById("hamburIcon");
let asideIcons = document.getElementsByClassName("asideIcons");
let is_opened = false;

hamber.addEventListener("click", toggleSideBar);

function toggleSideBar() {
  is_opened = !is_opened;
  if (!is_opened) {
    sideBar.style.width = "100px";
    for (let i = 0; i < asideIcons.length; i++) {
      asideIcons[i].style.flexDirection = "column";
    }
  } else {
    sideBar.style.width = "220px";
    for (let i = 0; i < asideIcons.length; i++) {
      asideIcons[i].style.flexDirection = "row";
    }
  }
}
