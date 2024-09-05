const defaults = {
  multiple: false,
  max: 5,
  accept: "",
};

export function selectFiles(config) {
  config = Object.assign({}, defaults, config || {});
  const { multiple, accept } = config;
  const input = document.createElement("input");
  input.type = "file";
  input.style.display = "none";
  multiple && (input.multiple = multiple);
  accept && (input.accept = accept);

  // document.body.appendChild(input);
  let eventHandler;
  const promise = new Promise((resolve, reject) => {
    eventHandler = (e) => {
      if (e?.target?.files) {
        resolve(Array.from(e.target.files));
      } else {
        reject(e);
      }
    };
    input.addEventListener("change", eventHandler);
    input.click();
  });

  return promise.then(
    (files) => {
      input.removeEventListener(eventHandler);
      document.body.removeChild(input);
      return files;
    },
    (e) => {
      document.body.removeChild(input);
      return Promise.reject(e);
    }
  );
}

export const download = (url, fileName) => {
  console.log(url);
  const a = document.createElement("a");
  try {
    a.href = url;
    a.download = fileName || "file";
    a.click();
  } catch (e) {
    e.message = "下载失败";
    throw e;
  }
};
