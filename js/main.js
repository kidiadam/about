
const app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data () {
    return {
      hover: "about",
      page: "about",
      profile: "",
      profileJson: "你好，我是Jerry，一名前端工程師@@@@@#####$%前端工程師，自2019年初開始進入相關行業擔任前端工程師迄今。/從使用Vue框架進行專案開發，至Nuxt進行SSR並架設server，產業領域亦包含網路行銷、活動專案、B端及C端之電商網站和平台。",
      profileArr: [],
      typeTimeFunction: null,
      dialog: false,
      formDialog: false,
      projects: [
        {
          type: "行銷遊戲模組",
          content: [
            {
              src: "1-1.jpg",
              description: "為王品集團旗下品牌-藝奇之活動網頁，QTE類型互動遊戲，畫面上顧客會隨機點餐，將菜單內正確的餐點拖曳至顧客上即可獲得得分。"
            },
            {
              src: "1-2.jpg",
              description: "為王品集團旗下品牌-藝奇之活動網頁，QTE類型互動遊戲，畫面上顧客會隨機點餐，將菜單內正確的餐點拖曳至顧客上即可獲得得分。"
            },
            {
              src: "1-3.jpg",
              description: "為王品集團旗下品牌-聚之活動網頁，畫面上會有一台起司研磨機，使用滑鼠或拖曳螢幕點選手把並進行轉圈可進行研磨，並搭配機器底下飄下起司碎屑以及湯頭逐漸變色，達成指定圈數即可獲得優惠內容。"
            },
            {
              src: "1-4.jpg",
              description: "為王品集團旗下品牌-享鴨之活動網頁，QTE類型互動遊戲，進度條上會有快速移動之指針，在指定區間內進行點選可獲得相對應積分，以及對應的片鴨動畫"
            },
            {
              src: "1-5.jpg",
              description: "為王品集團旗下品牌-享鴨之活動網頁，QTE類型互動遊戲，進度條上會有快速移動之指針，在指定區間內進行點選可獲得相對應積分，以及對應的片鴨動畫"
            },
            {
              src: "1-6.jpg",
              description: "為雅詩蘭黛之活動網頁，進行社群軟體登入串接後，可進行遊戲領取優惠券，遊戲內容類似於吃金幣獲得積分。"
            },
            {
              src: "1-7.jpg",
              description: "玩粉絲網路行銷模組，透過各種遊戲方式(如抽獎、拉霸等)，與使用者互動，達成各種品牌優惠活動之推廣。"
            },
            {
              src: "1-8.jpg",
              description: "為玩粉絲所新增之遊戲模組，為寶石三消遊戲，並可針對寶石素材進行圖檔更替"
            },
            {
              src: "1-9.jpg",
              description: "玩粉絲網路行銷模組，透過各種遊戲方式(如抽獎、拉霸等)，與使用者互動，達成各種品牌優惠活動之推廣。"
            },
          ]
        },
        {
          type: "活動專案",
          content: [
            {
              src: "2-1.jpg",
              description: "為保時捷活動台灣官網(後代理權變更網站已停用)"
            },
            {
              src: "2-2.jpg",
              description: "保時捷於2020年所推出之客製化內裝活動，於官網進行車款、內裝客製後儲存圖片，並上傳至活動頁面進行投票"
            },
            {
              src: "2-3.jpg",
              description: "為SAPPORO之活動網頁，將使用者自行拍攝之暢飲照，上傳至活動頁面後，產生出仿拍立得樣式之照片，並進行押花，除了供使用者自行儲存，也可再上傳報名抽獎活動"
            },
            {
              src: "2-4.jpg",
              description: "為SAPPORO之活動網頁，將使用者自行拍攝之暢飲照，上傳至活動頁面後，產生出仿拍立得樣式之照片，並進行押花，除了供使用者自行儲存，也可再上傳報名抽獎活動"
            },
            {
              src: "2-5.jpg",
              description: "全聯之活動頁面，每年皆會固定推出2~4檔親子主題照片上傳活動"
            },
            {
              src: "2-6.jpg",
              description: "全聯福利熊官網(非開發僅作後續維護及功能擴充)"
            },
            {
              src: "2-7.jpg",
              description: "全聯之活動頁面，每年皆會固定推出2~4檔親子主題照片上傳活動"
            },
            {
              src: "2-8.jpg",
              description: "iRent之活動頁面，QTE類型互動遊戲，完成社群軟體登入串接後，使用者於頁面內操作汽車於三線車道行駛，每條車道會不定時出現阻礙物使切換至安全車道，通關或可獲得免費之里程數"
            },
            {
              src: "2-9.jpg",
              description: "World Gym舉辦之線上春酒尾牙(2021~2023)活動頁面，員工事前於LINE進進行串接綁定後，每日皆有指定任務完成可獲得獎勵，最後於活動當日進行尾牙獎品抽獎，除了再網頁內使用拉霸機以外，也搭配樂透彩球機增加抽獎的變化性"
            },
            {
              src: "2-10.jpg",
              description: "World Gym舉辦之線上春酒尾牙(2021~2023)活動頁面，員工事前於LINE進進行串接綁定後，每日皆有指定任務完成可獲得獎勵，最後於活動當日進行尾牙獎品抽獎，除了再網頁內使用拉霸機以外，也搭配樂透彩球機增加抽獎的變化性"
            },
            {
              src: "2-11.jpg",
              description: "World Gym舉辦之線上春酒尾牙(2021~2023)活動頁面，員工事前於LINE進進行串接綁定後，每日皆有指定任務完成可獲得獎勵，最後於活動當日進行尾牙獎品抽獎，除了再網頁內使用拉霸機以外，也搭配樂透彩球機增加抽獎的變化性"
            },
            {
              src: "2-12.jpg",
              description: "World Gym舉辦之線上春酒尾牙(2021~2023)活動頁面，員工事前於LINE進進行串接綁定後，每日皆有指定任務完成可獲得獎勵，最後於活動當日進行尾牙獎品抽獎，除了再網頁內使用拉霸機以外，也搭配樂透彩球機增加抽獎的變化性"
            },
            {
              src: "2-13.jpg",
              description: "de balets小巴黎品牌活動頁面，上傳與品牌商品之合照，並上傳參與投票，可獲得品牌保養組"
            },
            {
              src: "2-14.jpg",
              description: "群益投信之饑饉組合推廣活動網頁，其中試算功能需串接對方asp .net core程式"
            },
            {
              src: "2-15.jpg",
              description: "公司官網(非開發僅作後續維護及功能擴充)"
            },
            {
              src: "2-16.jpg",
              description: "公司官網(非開發僅作後續維護及功能擴充)"
            },
            {
              src: "2-17.jpg",
              description: "公司官網(非開發僅作後續維護及功能擴充)"
            },
          ]
        },
        {
          type: "電商網站",
          content: [
            {
              src: "3-1.jpg",
              description: "HoHo好服務為居家服務平台，除了進行居家服務預約選購，亦有上千種商品進行販售，初始站台由後端.net core編寫，而後前後端分離進行站台改版"
            },
            {
              src: "3-2.jpg",
              description: "捷元供應商採購專區，主要是面對供應商之B端店商網站，初始站台由後端.net core編寫，而後站台改版已Nuxt進行站台架構，並搭配SSR"
            },
            {
              src: "3-3.jpg",
              description: "小巴黎為香氛品牌，於cyberbiz平台上進行套版上架，因網站提供模版抽換功能，部分版型若無法進行套版則以客製化的方式自行編寫抽換"
            },
            {
              src: "3-4.jpg",
              description: "小巴黎於LINE官方粉絲團的會員頁面，可即時查詢相關消費紀錄、使用優惠券、會員集點…等相關功能"
            },
            {
              src: "3-5.jpg",
              description: "小巴黎於LINE官方粉絲團的會員頁面，可即時查詢相關消費紀錄、使用優惠券、會員集點…等相關功能"
            },

          ]
        },
        {
          type: "後台系統",
          content: [
            {
              src: "4-1.jpg",
              description: "全聯相關照片上傳活動之後台，進行各組參賽人之作品評選，以及即時下架不適之作品"
            },
            {
              src: "4-2.jpg",
              description: "公司官網後台，可編輯相關文章，並模擬區套版網站之功能，使用者可選定版型，編輯過程中上傳圖片、輸入文章後，畫面所見即為屆時前台畫面所得"
            },
            {
              src: "4-3.jpg",
              description: "小巴黎POS系統，主要開發提供門市人員使用，搭配條碼刷取商品後，連動資料庫顯示價格並依照當前設定季節優惠顯示優惠價格，以及相關庫存和顧客名單"
            },
            {
              src: "4-4.jpg",
              description: "小巴黎POS系統，主要開發提供門市人員使用，搭配條碼刷取商品後，連動資料庫顯示價格並依照當前設定季節優惠顯示優惠價格，以及相關庫存和顧客名單"
            },
            {
              src: "4-5.jpg",
              description: "公司那部EIP系統，設定各部門或人員權限、表單申請與簽核、資產管理、公司客戶資料管理…等內部運作相關功能"
            },
          ]
        },
        // {
        //   type: "其他",
        //   content: []
        // }
        
      ],
      selectedType : {},
      selectedItemIndex: 0,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || '請讓我知道怎麼稱呼你',
      ],
      email: '',
      emailRules: [
        v => !!v || '請留下你的E-mail或電話',
      ],
      message: "",
      loading: false,
      url: "https://script.google.com/macros/s/AKfycbxW3fHdim-UApx_rJOVBuGoV000GotQx_xXbFSYyPwEMynjZhNY2apIQGfwzboqMwJH/exec"
    }
  },
  methods: {
    hoverOut() {
      this.hover = this.page
    },
    hoverIn(nav) {
      this.hover = nav
    },
    typeWord() {
      const vm = this
      vm.profileArr = vm.profileJson.split("")
      this.typeTimeFunction = setInterval(() => {
        const str = vm.profileArr[0]
        if (typeof str == "undefined") {
          vm.typeTimeFunction = null
          clearInterval(vm.typeTimeFunction)
          return
        }
        if (str == "/") {
          vm.profile += "\n"
        } else if (str == "#") {
          vm.profile = vm.profile.substring(0, vm.profile.length - 1);
        } else if (str == "@") {
        } else if (str == "$") {
          vm.profile += "<span class='strong'>資</span>"
        } else if (str == "%") {
          vm.profile += "<span class='strong'>深</span>"
        } else {
          vm.profile += str
        }
        vm.profileArr.splice(0, 1)
      }, 100)
    },
    initSwiper() {
      const projectSwiper1 = new Swiper(".projectSwiper1", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      const projectSwiper2 = new Swiper(".projectSwiper2", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      const projectSwiper3 = new Swiper(".projectSwiper3", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      const projectSwiper4 = new Swiper(".projectSwiper4", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
    showModal(project, contentIdx) {
      this.selectedType = project
      this.selectedItemIndex = contentIdx
      this.$nextTick(() => {
        this.dialog = true
      })
    },
    changeItem(isAdd) {
      const { selectedItemIndex, selectedType } = this
      const { content } = selectedType
      if (isAdd) {
        this.selectedItemIndex = selectedItemIndex >= content.length - 1? 0 : selectedItemIndex + 1;
      } else {
        this.selectedItemIndex = selectedItemIndex <= 0? content.length - 1 : selectedItemIndex - 1;
      }
    },
    validate () {
      
      if (this.$refs.form.validate()) {
        this.loading = true
        const html = document.querySelector("html")
        html.classList.add("overflow-y-hidden")
        const vm = this
        const formdata = new FormData()
        const { name, email, message } = this
        formdata.append('name', name)
        formdata.append('contact', email)
        formdata.append('message', message)
        formdata.append(
          'time',
          Intl.DateTimeFormat('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Taipei',
          })
            .format(new Date())
            .replace(/\//g, '-')
        )

        fetch(this.url, { method: 'POST', body: formdata, redirect: 'follow' })
        .then((res) => res.text())
        .then((result) => {
          vm.formDialog = true;
        })
        .catch((error) => {
          vm.formDialog = true;
        })
        .then(() => {
          vm.$refs.form.reset()
          vm.loading = false
          html.classList.remove("overflow-y-hidden")
        })
      }
    },
    scrollTo(target) {
      const el = document.getElementById(target)
      const { offsetTop } = el
      const top = offsetTop - 60
      window.scrollTo({ top, behavior: 'smooth' })
    }
  },
  computed: {
    selectedItem() {
      const { selectedType, selectedItemIndex } = this
      if (selectedType.content) {
        return selectedType.content[selectedItemIndex]
      } else {
        return {}
      }
    }
  },
  mounted() {
    this.typeWord();
    this.initSwiper()
    const vm = this
    window.addEventListener("scroll", () => {
      const { scrollY } = window
      const projects = document.getElementById("projects").offsetTop
      const contact = document.getElementById("contact").offsetTop
      if (scrollY > contact - 62) {
        vm.page = "contact"
        vm.hover = "contact"
      } else if (scrollY > projects - 62) {
        vm.page = "projects"
        vm.hover = "projects"
      } else {
        vm.page = "about"
        vm.hover = "about"
      }
    })
  }
})