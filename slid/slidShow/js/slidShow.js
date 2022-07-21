let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
 "https://cdn.mos.cms.futurecdn.net/ku6PvoHKeSjM38XvNnxW9P-970-80.jpg.webp",
 "https://static01.nyt.com/images/2008/07/27/sports/600-tour-span3.jpg?quality=75&auto=webp",
 "https://static01.nyt.com/images/2009/07/26/sports/27tour5_600.jpg?quality=75&auto=webp",
 "https://i.ytimg.com/vi/CoJph6jXRG8/maxresdefault.jpg",
 "https://www.abc.net.au/news/image/2808852-3x2-940x627.jpg",
 "https://cdn.mos.cms.futurecdn.net/j8FHHfpjuvL83aTrbawAnE-970-80.jpg.webp",
 "https://www.cyclowired.jp/sites/default/files/images/2013/07/22/ayano2013tdf21e%20-%200853.jpg",
 "https://ichef.bbci.co.uk/onesport/cps/976/mcs/media/images/76562000/jpg/_76562430_vincenzonibali.jpg",
 "https://cyclehistory.files.wordpress.com/2015/07/tdfpodium2015.jpg?w=1094&h=656",
 "https://bikeraceinfo.com/images-all/tdf-images/images16/2016-tdf-21-froome-chris-podium.jpg",
 "https://saitama-criterium.jp/files/photo/00001400/00001491-L.jpg",
 "https://cdn.mos.cms.futurecdn.net/ZHQMWvVXgQbn2X4mGhKdz4-1920-80.jpg.webp",
 "https://cyclingtips.com/wp-content/uploads/2020/12/20190728TDF1022-A.S.O.-Pauline-BALLET.jpeg",
 "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(webp):focal(1339x746:1341x744)/origin-imgresizer.eurosport.com/2020/09/21/2891350-59535008-2560-1440.jpg",
 "https://cdn.mos.cms.futurecdn.net/ZAiRCyY3V2karpZ9BvkJeC.jpg",
 "http://www.booking-expo.com/event-logo/public/event-logo/2014/10/whos-next-logo.jpg",

];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
 mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
 mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
 right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
