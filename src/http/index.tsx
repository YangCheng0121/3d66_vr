import axios from "./axios"
import { getToken, getUserInfo, isService, getLocalLang } from "utils"
import { error as NotifyErrorShow } from "../common/notify"
import nookies from 'nookies'
import In18 from "@in18/i18nText"
import { cacheConfig, createCache, getCache } from "./httpDataCache"


axios.interceptors.request.use(
  config => {
    let token = getToken();
    let lang = getLocalLang();
    if (token) {
      config.headers.authorization = token
    }
    if (lang) {
      config.headers["languageCode"] = lang
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      if (!response.data.success) {
        if (response.headers["content-type"].match("application/json")) {
          let message = In18.T(response.data.code);
          let notFound = "id未配置-" + response.data.code;
          NotifyErrorShow({
            message: message == notFound ? response.data.msg : message
          })
        }
      } else {
        let URL = response.config.url
        if (URL) {
          if (cacheConfig[URL]) {
            createCache(URL, response.data)
          }
        }
      }

    }
    if (response.data.code == 401) {
      response["data"] = {
        code: 401,
        data: [],
        msg: response.data.msg,
        success: false,
      }

      if (!isService()) {
        window.localStorage.removeItem("userInfo");
        window.localStorage.removeItem("token");
        nookies.destroy(null, "userInfo", {
          path: "/",
        })
        window.location.href = "/login"
      }

    }
    return response;
  },
  error => {
    console.error("error", error)
    //  JSON.stringify(error)
    NotifyErrorShow({
      message: In18.T("00000"),
    })
    return Promise.reject({
      code: 500,
      data: [],
      msg: "error",
      success: false,
    })
  }
);


type AxiosModel = {
  url: string,
  data?: any,
}






export function fetch(model: AxiosModel, config: any = {}) {
  let cacheData = getCache(model.url);
  if (cacheData) {
    return new Promise<HttpResponse.ResultData | HttpResponse.ResultList<any>>((resolve, reject) => {
      resolve(cacheData)
    }).catch((err) => {
      return err;
    })
  }
  return new Promise<HttpResponse.ResultData | HttpResponse.ResultList<any>>((resolve, reject) => {
    axios.get(model.url, {
      params: model.data,
      ...config
    }).then(response => {
      if (response.data.success) {
        resolve(response.data);
      } else {
        resolve(response.data);
      }
    }).catch(err => {
      resolve(err)
    })
  })
}


export function post(model: AxiosModel, config: any = {}) {
  let cacheData = getCache(model.url);
  if (cacheData) {
    return new Promise<HttpResponse.ResultData | HttpResponse.ResultList<any>>((resolve, reject) => {
      resolve(cacheData)
    }).catch((err) => {
      return err;
    })
  }
  return new Promise<HttpResponse.ResultData | HttpResponse.ResultList<any>>((resolve, reject) => {
    axios.post(model.url, model.data, config)
      .then((response) => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      }, err => {
        reject(err);
      })
  }).catch((err) => {
    return err;
  })
}


export function download(model: AxiosModel, config: any = {}) {
  return new Promise<HttpResponse.ResultData | HttpResponse.ResultList<any>>((resolve, reject) => {
    axios.post(model.url, model.data, {
      responseType: 'arraybuffer'
    })
      .then((res) => {
        const { data, headers } = res
        const fileName = headers['content-disposition'].replace(/\w+;filename=(.*)/, '$1')
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
        let dom: any = document.createElement('a')
        let url = window.URL.createObjectURL(blob)
        dom.href = url
        dom.download = decodeURI(fileName)
        dom.style.display = 'none'
        document.body.appendChild(dom)
        dom.click()
        dom.parentNode.removeChild(dom)
        window.URL.revokeObjectURL(url)
      }).catch((err) => {
      console.error(err, "download error")
    })
  }).catch((err) => {
    return err;
  })
}





export function patch(model: AxiosModel, config: any = {}) {
  return new Promise<HttpResponse.ResultData | HttpResponse.ResultList<any>>((resolve, reject) => {
    axios.patch(model.url, model.data, config)
      .then(response => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      }, err => {
        reject(err);
      })
  })
}


export function del(model: AxiosModel, config: any = {}) {
  return new Promise<HttpResponse.ResultData | HttpResponse.ResultList<any>>((resolve, reject) => {
    axios.delete(model.url, config)
      .then(response => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      }, err => {
        reject(err);
      })
  })
}

export function put(model: AxiosModel, config: any = {}) {
  return new Promise<HttpResponse.ResultData | HttpResponse.ResultList<any>>((resolve, reject) => {
    axios.put(model.url, model.data, config)
      .then(response => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      }, err => {
        reject(err);
      })
  })
}
