import Layout from "@components/Layout";
import Modal from "@components/Modal";



export default function HomePage() {
  const handleSave = () => {
    // 实现保存操作的逻辑
    console.log('111111111111');
  };

  return (
    <Layout>
      <p>首页</p>
      {/*绑定弹窗id: 123*/}
      <button data-hs-overlay="#hs-basic-modal">弹窗</ button >
      <Modal id="hs-basic-modal" title="Modal调用示例" onSave={handleSave}>
        {/* 这里传递模态框内容 */}
        <p>这是模态框的内容。</p>
        <p>可以包含任何 JSX 元素。</p>
      </Modal>
    </Layout>
  );
}

< !DOCTYPE html >
  <html lang="en">

    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <title>Audio Player</title>
          </head>

          <body class="bg-gray-100 p-6">
            <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
              <h1 class="text-2xl mb-4">Audio Player</h1>
              <audio id="audio" controls class="w-full mb-4"></audio>
              <div class="flex items-center space-x-2 mb-4">
                <input id="search" type="text" placeholder="Search..." class="w-3/4 p-2 border rounded-l">
                  <button id="searchBtn" class="w-1/4 bg-blue-500 text-white rounded-r p-2">Search</button>
              </div>

              <div class="h-60 overflow-y-scroll">

                <ul id="playlist" class="space-y-2">
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/64fbe925cd3b4b8dff3a4455adc3a9c18872bc36.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 1</span>
                    <span>3:45</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/64fbeb277ec97ad5059e4cf2b61d0c84179e8111.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 2</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 3</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 4</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 5</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 6</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 7</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 8</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 9</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 10</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 11</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 12</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <li data-src="/Users/zhangguangqiang/.dahuzi_yun_pan_ying_yue/upload/123.mp3"
                    class="song-item flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <span>Song 13</span>
                    <span>4:20</span>
                    <i class="material-icons play-icon cursor-pointer">play_arrow</i>
                  </li>
                  <!-- Add more songs here -->
                </ul>
              </div>
            </div>

            <script>
              const audio = document.getElementById('audio');
              const playlist = document.getElementById('playlist');
              const searchInput = document.getElementById('search');
              const searchBtn = document.getElementById('searchBtn');
              const playIcons = document.querySelectorAll('.play-icon');

              let currentSong = null;


        playIcons.forEach(icon => {
                icon.addEventListener('click', () => {
                  const songItem = icon.closest('.song-item');
                  const songSrc = songItem.getAttribute('data-src');

                  // Reset all song items to their initial state
                  document.querySelectorAll('.song-item').forEach(item => {
                    item.style.backgroundColor = 'white';
                    item.querySelector('.play-icon').textContent = 'play_arrow';
                  });

                  if (currentSong === songSrc) {
                    if (!audio.paused) {
                      audio.pause();
                      icon.textContent = 'play_arrow';
                    } else {
                      audio.play();
                      icon.textContent = 'pause';
                      songItem.style.backgroundColor = 'lightgray';
                      currentSong = songSrc;
                    }
                  } else {
                    audio.src = songSrc;
                    audio.play();
                    icon.textContent = 'pause';
                    songItem.style.backgroundColor = 'lightgray';
                    currentSong = songSrc;
                  }
                });
        });

              audio.addEventListener('ended', playNextSong);

              function playNextSong() {
            const currentSongItem = document.querySelector(`[data-src="${currentSong}"]`);
              const nextSongItem = currentSongItem.nextElementSibling;
              if (nextSongItem) {
                const playIcon = nextSongItem.querySelector('.play-icon');
              playIcon.click();
            }
        }


        // 你的 JavaScript 代码
        searchBtn.addEventListener('click', () => {
            const searchValue = searchInput.value.toLowerCase();
              const songItems = document.querySelectorAll('.song-item');
              let found = false;

            songItems.forEach(songItem => {
                const songName = songItem.querySelector('span').textContent.toLowerCase();
              if (songName.includes(searchValue)) {
                    if (!found) {
                // 滚动到匹配的歌曲并将其居中
                songItem.scrollIntoView({ behavior: "auto", block: "center" });
              songItem.style.backgroundColor = 'lightgreen'; // 更改背景色
              found = true;
                    } else {
                // 如果有多个匹配，将其他匹配的歌曲背景色恢复到初始状态
                songItem.style.backgroundColor = 'white';
                    }
                }
            });
        });
            </script>
          </body>

        </html>