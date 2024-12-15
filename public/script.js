function updateTime() {
  const publishedDate = new Date('2024-12-15T17:00:00'); // 设置文章的发布时间
  const now = new Date();
  const timeDiff = now - publishedDate;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const displaySeconds = seconds % 60;
  const displayMinutes = minutes % 60;
  const displayHours = hours % 24;

  document.getElementById('time-since-published').innerText = 
    `文章最近更新：${days}天${displayHours}时${displayMinutes}分${displaySeconds}秒前`;
}

setInterval(updateTime, 1000); // 每秒更新一次