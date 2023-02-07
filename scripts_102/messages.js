const messages = {

  getMessagesViewed: function () {
    const messagesString = localStorage.getItem("messagesViewed") || "";
    return messagesString.split(",");
  },

  getMessageToShow: function () {
    let messagesViewed = this.getMessagesViewed();
    //iterate through messages and return the first one that hasn't been viewed
    for (let i=0; i<this.messageList.length; i++){
      const m = this.messageList[i];
      if (!messagesViewed.includes(m.id+"")) {
        this.markMessageViewed(m.id);
        return m;
      }
    }
    return null;
  },

  markMessageViewed: function (id) {
    let messagesViewed = this.getMessagesViewed();
    messagesViewed.push(id);
    localStorage.setItem("messagesViewed", messagesViewed.join(","));
  },

  messageList: [
    {
      id:1,
      title:`About this site`,
      body:
`
<p>This is an organized list of the best online mini-games</p>

<p><svg class="icon" x="0px" y="0px" width="1000px" height="1000px" viewBox="-73.422 -65.423 1000 1000">
<path d="M815.809,790.179c-5.471-12.521-4.811-23.214-10.964-34.527l-1.699-3.132L658.383,607.237
	c-3.39-3.424-6.812-6.832-10.226-10.229c-6.13-6.09-12.256-12.189-18.237-18.425l-13.323-13.126l202.905-202.909l-15.562-15.561
	c-83.198-83.206-209.34-114.309-322.828-79.982l-58.074-58.068c7.021-71.272-18.419-143.274-68.516-193.359L338.991,0L0,338.979
	l15.582,15.561c50.103,50.105,122.068,75.526,193.367,68.514l58.074,58.077c-34.315,113.469-3.224,239.618,79.976,322.816
	l15.553,15.56l202.901-202.899l13.132,13.312c6.201,5.963,12.271,12.062,18.343,18.161c3.408,3.415,6.804,6.831,10.2,10.194
	l143.359,143.365l5.166,3.212c11.312,6.146,19.406,7.258,31.925,12.726l34.26,4.26L815.809,790.179z"></path></svg></p>
<p>Pin your favorite games to the top for easy access</p>

<p><svg class="icon" x="0px" y="0px" width="958px" height="958px" viewBox="-0.909 -0.908 958 958">
<path d="M941.676,577.938L941.676,577.938c-88.644-36.714-88.644-162.271,0-198.985l0,0
c12.578-5.21,18.549-19.637,13.339-32.215L908.565,234.6c-5.21-12.578-19.639-18.553-32.217-13.343l0,0
c-88.64,36.712-177.42-52.066-140.691-140.695l0,0c5.206-12.578-0.769-27.007-13.347-32.217L610.163,1.882
c-12.578-5.208-27.008,0.767-32.218,13.344c-36.714,88.64-162.271,88.64-198.98,0c-5.21-12.578-19.639-18.553-32.217-13.344
L234.6,48.334c-12.578,5.21-18.553,19.639-13.343,32.217c36.714,88.64-52.067,177.418-140.707,140.707
c-12.578-5.21-27.007,0.765-32.217,13.343L1.883,346.739c-5.21,12.578,0.765,27.005,13.343,32.215l0,0
c88.64,36.714,88.64,162.271,0,198.985l0,0c-12.578,5.21-18.553,19.636-13.343,32.213l46.45,112.137
c5.21,12.578,19.639,18.557,32.217,13.347l0,0c88.64-36.714,177.421,52.063,140.696,140.707l0,0
c-5.21,12.578,0.765,27.003,13.343,32.213l112.137,46.454c12.578,5.21,27.007-0.769,32.217-13.347l0,0
c36.714-88.636,162.268-88.636,198.981,0l0,0c5.21,12.578,19.639,18.557,32.217,13.347l112.141-46.454
c12.577-5.21,18.549-19.635,13.339-32.213l0,0c-36.71-88.644,52.07-177.421,140.706-140.699c12.578,5.21,27.011-0.766,32.221-13.343
l46.45-112.137C960.225,597.574,954.254,583.156,941.676,577.938z M478.449,681.015c-111.875,0-202.565-90.69-202.565-202.565
c0-111.871,90.691-202.565,202.565-202.565s202.565,90.694,202.565,202.565C681.014,590.324,590.324,681.015,478.449,681.015z"></path>
</svg></p>
<p>In Settings, change the theme, hide unpinned links, and customize the list</p>

<p><svg class="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
 <polygon points="289.391,222.609 289.391,0 222.609,0 222.609,222.609 0,222.609 0,289.391 222.609,289.391 222.609,512 
   289.391,512 289.391,289.391 512,289.391 512,222.609 		"/>
</svg></p>
<p>At the bottom of the page, add your own links to other games and useful websites</p>
`
    },

//     {
//       id:2,
//       title:`New Features`,
//       body:
// `
// <p>25 new games are coming soon!</p>
// <p>I added a feature that marks new games. If you've already tried them, just click the link to unmark them all.</p>
// <p>Also, there's a new toggle in Settings to open links in a new tab, if you prefer that.</p>
// <p>This site is an indie project. Thanks for coming along for the ride!</p>
// <p>If you have any other feature requests, game suggestions or other comments, please email me at <a href="mailto:dave@5minute.games" target="_blank">dave@5minute.games</a></p>
// `
//     },

  //   {
  //     id:3,
  //     title:`New Games!`,
  //     body:
  // `<p>I added 25 new games!</p>
  // <p>If you've been playing for a while, these might not get flagged with NEW banners for you</p>
  // <p>Just show all the links and browse the list. There's some real gems here!</p>
  // <p>I'm glad you're enjoying this site. If you have other feature requests, game suggestions or other comments, please email me at <a href="mailto:dave@5minute.games" target="_blank">dave@5minute.games</a> </p>
  // `
  //   },

  ],

  

};

export default messages;
