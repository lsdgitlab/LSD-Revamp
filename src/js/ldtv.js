document.addEventListener('DOMContentLoaded', init)
function init() {
  //  tabs
  if (document.getElementById('ldtvCategory')) {
    var tabs = document.getElementById('ldtvCategory')
    var tabLinks = tabs.getElementsByTagName('a')
    if (!tabLinks) {
      console.log('Element not in DOM')
      return
    }

    var title = document.getElementById('catTitile')

    function showTab(event) {
      event.preventDefault()
      var contentId = event.target.href.split('#')[1]
      var content = document.getElementById(contentId)
      var tabLinks = tabs.getElementsByTagName('a')
      for (var i = 0; i < tabLinks.length; i++) {
        var tabLink = tabLinks[i]
        var tabId = tabLink.href.split('#')[1]
        var tabContent = document.getElementById(tabId)
        if (tabLink === event.target) {
          tabLink.classList.add('active')
          tabContent.classList.add('active')
        } else {
          tabLink.classList.remove('active')
          tabContent.classList.remove('active')
        }
      }
    }

    for (var i = 0; i < tabLinks.length; i++) {
      var tabLink = tabLinks[i]
      //   tabLink.addEventListener("click", showTab);

      tabLink.addEventListener('click', function () {
        linkcontent = this.innerHTML
        title.innerHTML = linkcontent
        showTab(event)
      })
    }
    //  tabs end
  }

  // youtube video popup
  var videoButtons = document.getElementsByClassName('video-button')
  var popup = document.getElementById('popup-wrapper')

  // document.querySelector('#social-media').addEventListener('click', function(event){
  //     if(event.target.matches('.video-button')){
  //         var videoId = this.getAttribute("data-video-id");
  //          var videoPopup = document.getElementById("video-popup");

  //          videoPopup.innerHTML = '<iframe width="100%" height="360" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  //          popup.classList.add('show');

  //     }
  // })

  for (var i = 0; i < videoButtons.length; i++) {
    videoButtons[i].onclick = function (eve) {
      var videoId = this.getAttribute('data-video-id')
      var videoPopup = document.getElementById('video-popup')

      videoPopup.innerHTML =
        '<iframe width="100%" height="360" src="https://www.youtube.com/embed/' +
        videoId +
        '" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      popup.classList.add('show')
    }
    //   videoButtons[i].addEventListener('click', function (event) {
    //   })
  }
  let clsbtn = document.getElementById('close')
  clsbtn.onclick = function () {
    popup.classList.remove('show')
  }

  window.onclick = function (event) {
    if (event.target == popup) {
      popup.classList.remove('show')
    }
  }
  // youtube video popup end

  var player,
    card = document.querySelector('.card'),
    video = document.querySelector('.card-video')

  // Shine effect
  card.onmousemove = function (e) {
    const x = e.pageX - card.offsetLeft
    const y = e.pageY - card.offsetTop

    card.style.setProperty('--x', x + 'px')
    card.style.setProperty('--y', y + 'px')
  }
  window.onload = function () {
    var imgs = document.querySelectorAll('.card-video img')
    var divs = document.querySelectorAll('.card')
    for (var i = 0; i < imgs.length; i++) {
      //  console.log(divs[i]);
      divs[i].style.backgroundImage = 'url(' + imgs[i].src + ')'
    }
  }

  let ytviditem = [
    {
      id: 1,
      datavideoid: '5QoVTIlm8Do',
      cardthumbImg: 'image-452.png',
      sharePlatform: 'Facebook',
      name: 'Prema',
      profiledesc: "Facebook's Professional Profiles",
    },
    {
      id: 2,
      datavideoid: 'zM3rDvfx7Pg',
      cardthumbImg: 'image-452.png',
      sharePlatform: 'Facebook',
      name: 'Prema',
      profiledesc: "Facebook's Professional Profiles",
    },
    {
      id: 3,
      datavideoid: 'DESJSNxhq8k',
      cardthumbImg: 'image-452.png',
      sharePlatform: 'Facebook',
      name: 'Prema',
      profiledesc: "Facebook's Professional Profiles",
    },
    {
      id: 4,
      datavideoid: '5QoVTIlm8Do',
      cardthumbImg: 'image-452.png',
      sharePlatform: 'Facebook',
      name: 'Prema',
      profiledesc: "Facebook's Professional Profiles",
    },
    {
      id: 5,
      datavideoid: '378R-xBqTf4',
      cardthumbImg: 'image-452.png',
      sharePlatform: 'Facebook',
      name: 'Prema',
      profiledesc: "Facebook's Professional Profiles",
    },
    {
      id: 6,
      datavideoid: '5QoVTIlm8Do',
      cardthumbImg: 'image-452.png',
      sharePlatform: 'Facebook',
      name: 'Prema',
      profiledesc: "Facebook's Professional Profiles",
    },
    {
      id: 7,
      datavideoid: '5QoVTIlm8Do',
      cardthumbImg: 'image-452.png',
      sharePlatform: 'Facebook',
      name: 'Prema',
      profiledesc: "Facebook's Professional Profiles",
    },
    {
      id: 8,
      datavideoid: '5QoVTIlm8Do',
      cardthumbImg: 'image-452.png',
      sharePlatform: 'Facebook',
      name: 'Prema',
      profiledesc: "Facebook's Professional Profiles",
    },
  ]

  // option 1
  // var loadmorebtn = document.getElementById('loadmore');
  // var itemcontainer = document.getElementsByClassName('thumbimg')[0];
  // let curindx = 0;
  // var batchsize = 2;

  // function loadData(){
  //   let nextitem = ytviditem.slice(curindx, curindx + batchsize);
  //     var thumbHtml = '';

  //     nextitem.forEach(function(item){
  //         //    console.log(item.datavideoid);
  //     thumbHtml += `<div class="thumbnail">
  //     <div class="card video-button" data-video-id="${item.datavideoid}">
  //         <div class="card-play"></div>
  //         <div class="card-video">
  //             <img src="img/${item.cardthumbImg}" class="card-img" alt="">
  //         </div>
  //     </div>
  //     <p class="sub-txt">${item.sharePlatform}</p>
  //     <div class="di-flex icon-txt">
  //         <div class="thumb-icon">
  //             <a href='#' class="playBut sm video-button" data-video-id="${item.datavideoid}">
  //                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
  //                     xmlns:xlink="http://www.w3.org/1999/xlink"
  //                     xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px"
  //                     y="0px" width="38px" height="38px" viewBox="0 0 213.7 213.7"
  //                     enable-background="new 0 0 213.7 213.7" xml:space="preserve">
  //                     <polygon class='triangle' id="XMLID_18_" fill="none" stroke-width="10"
  //                         stroke-linecap="round" stroke-linejoin="round"
  //                         stroke-miterlimit="10" points="
  //     73.5,62.5 128.5,95.8 73.5,129.1 " />
  //                 </svg>
  //             </a>
  //         </div>
  //         <div class="thumbTxt">
  //             <p class="thumbNam">${item.name}</p>
  //             <p class="thumbsmltxt">${item.profiledesc}</p>
  //         </div>
  //     </div>
  // </div>`

  //     curindx += batchsize

  //         itemcontainer.innerHTML += thumbHtml;

  //         if(curindx >= ytviditem.length){
  //             loadmorebtn.  = true
  //          }
  //     })

  // }
  // loadmorebtn.addEventListener('click', function(){
  //     loadData()
  // })
  // loadData()

  // option 2
  let itemloaded = 0
  var loadmorebtn = document.getElementById('loadmore')

  function loadMoreitem() {
    // get the container item added in the container div
    const container = document.getElementById('thumbimg')

    // loop through the next 3 item in the array
    for (var i = itemloaded; i < itemloaded + 3; i++) {
      if (i >= ytviditem.length) {
        // if there are no more items to load, break out of the loop
        break
      }

      // create the HTML for the string of item
      const htmlThumb = `<div class="thumbnail">
        <div class="card video-button" data-video-id="${ytviditem[i].datavideoid}">
            <div class="card-play"></div> 
            <div class="card-video">
                <img src="img/${ytviditem[i].cardthumbImg}" class="card-img" alt="">
            </div>
        </div>
        <p class="sub-txt">${ytviditem[i].sharePlatform}</p>
        <div class="di-flex icon-txt">
            <div class="thumb-icon">
                <a href='#' class="playBut sm video-button" data-video-id="${ytviditem[i].datavideoid}">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px"
                        y="0px" width="38px" height="38px" viewBox="0 0 213.7 213.7"
                        enable-background="new 0 0 213.7 213.7" xml:space="preserve">
                        <polygon class='triangle' id="XMLID_18_" fill="none" stroke-width="10"
                            stroke-linecap="round" stroke-linejoin="round"
                            stroke-miterlimit="10" points="
        73.5,62.5 128.5,95.8 73.5,129.1 " />
                    </svg>
                </a>
            </div>
            <div class="thumbTxt">
                <p class="thumbNam">${ytviditem[i].name}</p>
                <p class="thumbsmltxt">${ytviditem[i].profiledesc}</p>
            </div>
        </div>
    </div>`

      // append the item to the HTML container
      container.innerHTML += htmlThumb
    }
    // update the items to be loaded into the conateiner
    itemloaded += 3

    // disabled the load more button
    if (itemloaded > ytviditem.length) {
      loadmorebtn.classList.add('inactive')
    }
    // console.log(ytviditem.length);
  }

  // attach the event listenr to the button for show the load more item
  loadmorebtn.addEventListener('click', loadMoreitem)

  loadMoreitem()
}
