
    /* script use for job listing */
    //  JOB list tabs
    // [Biddable Performance
    // Business Alliance
    // Client Success
    // Consulting (Product)
    // Creative
    // Data Solutions
    // Design
    // Digital Planning & Strategy
    // Google Analytics
    // HR
    // IT
    // Legal
    // Marcom
    // Media Buying
    // PR
    // Programmatic Buying
    // QA and PMO
    // SEO
    // Social
    // Strategic Partnerships
    // showJobsBasedOnDepartment('Account & Finance')
    // showJobsBasedOnDepartment('Ad Management & Measurement')
    // showJobsBasedOnDepartment('Admin')
    // showJobsBasedOnDepartment('Adobe')]
    var jobtabscnt = [
      'ALL',
      'Accounts & Finance',
      'Admin',
      'Adobe',
      'Business Alliance',
      'Client Success',
      'Ad Management & Measurement',
      'Data Solutions',
      'QA and PMO',
      'Social',
    ]
  
    var jobdetailscnt = {
      'Accounts & Finance': {
        position: 'Jr. Executive ',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['Full Time', 'Design'],
      },
      Admin: {
        position: 'Programmatic Buying',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['Full Time', 'Front End'],
      },
      Adobe: {
        position: 'Adobe Developer',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['Full Time', 'Front End'],
      },
      'Business Alliance': {
        position: 'MT - Client Success',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['SEM', 'AdWords Management'],
      },
      'Client Success': {
        position: 'Google Tag Manager',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['Full Time', 'Paid Listing Ads Management'],
      },
      'Ad Management & Measurement': {
        position: 'Ad Tag Manager',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['SEO Services', ' Website SEO Audit'],
      },
      'Data Solutions': {
        position: 'Data Solutions Manager',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['SEO Services', ' Website SEO Audit'],
      },
      'QA and PMO': {
        position: 'QA and PMO',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['SEO Services', ' Website SEO Audit'],
      },
      Social: {
        position: 'Social',
        location: 'Navi Mumbai, Maharashtra',
        jobtype: ['SEO Services', ' Website SEO Audit'],
      },
    }
  
    var jobtabs = document.getElementById('joblist')
    var jobTabContent = document.getElementById('jobcard')
    currTab = 0
    jobtabscnt.forEach(function (tabitem) {
      var tablistItem = document.createElement('li')
      tablistItem.innerHTML = tabitem
      // if (currTab >= maxTab) {
      //   tablistItem.classList.add('hidden')
      // }
      tablistItem.onclick = function () {
        var actTabs = document.querySelectorAll('.act')
        actTabs.forEach(function (actab) {
          actab.classList.remove('act')
        })
        tablistItem.classList.add('act')
        if (tabitem === 'ALL') {
          showTabAllcnt()
        } else {
          showTabcnt(tabitem)
        }
      }
      jobtabs.appendChild(tablistItem)
      currTab++
    })
  
    // code use for job TAB carousel
    var carousel = document.querySelector('.carouselbg')
    var items = document.querySelectorAll('#joblist li')
    var nextBtn = document.getElementById('nextBtn')
    var prevBtn = document.getElementById('prevBtn')
    prevBtn.style.display = 'none'
  
    let curIndex = 0
    var displayItem = 5
    
    function displayCount(){
      if(window.innerWidth < 768){
        displayItem = 2
      }else{
        displayItem = 5
      }
    }
    displayCount();
  
    window.addEventListener('resize', displayCount);
  
    carousel.style.transform = `translateX(-${items[curIndex].offsetLeft}px)`
  
    nextBtn.addEventListener('click', () => {
      if (curIndex === items.length - displayItem) return
      curIndex++
      carousel.style.transition = 'transform 0.4s ease-in-out'
      carousel.style.transform = `translateX(-${items[curIndex].offsetLeft}px)`
  
      prevBtn.style.display = 'block'
      carousel.style.marginLeft = '50px'
      if (curIndex >= items.length - displayItem) {
        nextBtn.style.display = 'none'
      }
    })
    prevBtn.addEventListener('click', () => {
      if (curIndex === 0) return
      curIndex--
      carousel.style.transition = 'transform 0.4s ease-in-out'
      carousel.style.transform = `translateX(-${items[curIndex].offsetLeft}px)`
  
      nextBtn.style.display = 'block'
      if (curIndex <= 0) {
        prevBtn.style.display = 'none'
        carousel.style.marginLeft = 0
      }
    })
  
    // code use for job TAB carousel end
  
    // use for Job card details
    function showTabcnt(jbtab) {
      var tabCntTab = jobdetailscnt[jbtab]
      jobtype = ''
      tabCntTab.jobtype.forEach((subjobtype) => {
        jobtype += `<li><a href="#">${subjobtype}</a></li>`
      })
  
      jobTabContent.innerHTML = `
      <dl>
          <dt>${tabCntTab.position}</dt>
          <dd>
              <p>${tabCntTab.location}</p>
              <ul>
                  ${jobtype}               
              </ul>
          </dd>
      </dl>
      `
    }
    // use for show all Job card details
    function showTabAllcnt() {
      var allTabcnt = ''
      for (var tabitem in jobdetailscnt) {
        var tabCntTab = jobdetailscnt[tabitem]
        var jobtype = ''
        tabCntTab.jobtype.forEach(function (subjobtype) {
          jobtype += `<li><a href="#">${subjobtype}</a></li>`
        })
        allTabcnt += `
          <dl>
          <dt>${jobdetailscnt[tabitem].position}</dt>
          <dd>
              <p>${jobdetailscnt[tabitem].location}</p>
              <ul>
                  ${jobtype}       
              </ul>
          </dd>
      </dl>
          `
      }
      jobTabContent.innerHTML = allTabcnt
    }
    /* script use for job listing END */
