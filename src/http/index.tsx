import axios from "./axios"

axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  });

axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {
    console.error("error", error)
    //  JSON.stringify(error)
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
