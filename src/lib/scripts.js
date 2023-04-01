/* Global scripts */
const chatGPT = async (element) => {
  var payload = {body: document.querySelector('#'+element).value} // select element where input text is contained
  await fetch(
    'https://5j6m7iqxyvecntpl6g3ncsbk6m0zwdxo.lambda-url.us-east-1.on.aws/', // chatgpt API endpoint
    { method: 'POST',
      headers: {
        'Accept':'application.json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify(payload),
    })
  .then(response => response.json())
  .then(data => {
    document.querySelector('textarea').innerHTML = data['body']
    })
  }

/* Mobile menu: toggle sidebar and blur background */
const toggle = (is_open) => { 
  const sidebar = document.querySelector("#menu");
  const bg = document.querySelector("#body-bg");
  if (is_open === 1) {
    sidebar.style.left = "0px";
    bg.style.display = "block";
    bg.style.opacity = 0.3;
  } else {
    sidebar.style.left = "-400px";
    bg.style.display = "none";
    bg.style.opacity = 1;
  }
};

/* Pagination: .paginate class wraps li items */
const state = { current_page: 1, total_pages: 0, len: 0, limit: 0, list: NodeList }
const paginate = (query_string, limit) => {
  let post_list = document.querySelectorAll(query_string+" > li");
  const len = post_list.length;
  const total_pages = Math.ceil(len / limit) + 1;
  
  state.list = post_list;
  state.len = len;
  state.limit = limit;
  state.total_pages = total_pages;

  post_list.forEach((item) => {
    if (item.id <= limit) { item.style.display = "block"; } else { item.style.display = "none"; }
  });

  let page_buttons = "";
  for (let i = 1; i < total_pages; i++) {
    page_buttons = page_buttons+'<button type="button" onclick="paginateSetPage(`#blog`,'+i+')">'+i+'</button>';
  };
  document.querySelector("#pagination-numbers").innerHTML = page_buttons;
};
const paginatePageUp = (query_string) => {
  if (state.current_page === state.total_pages - 1) { return }
  let post_list = document.querySelectorAll(query_string+" > li");
  let page_number = state.current_page + 1;
  state.current_page = page_number;
  console.log(state.current_page);

  post_list.forEach((item) => {
    if (Math.ceil(item.id / state.limit) == page_number) {
      item.style.display = "block";
    } else { item.style.display = "none"; }
  });
};
const paginatePageDown = (query_string) => {
  if (state.current_page === 1) { return }
  let post_list = document.querySelectorAll(query_string+" > li");
  let page_number = state.current_page - 1;
  state.current_page = page_number;
  console.log(state.current_page);

  post_list.forEach((item) => {
    if (Math.ceil(item.id / state.limit) == page_number) { 
      item.style.display = "block";
    } else { item.style.display = "none"; }
  });
};
const paginateSetPage = (query_string, go_to_page) => {
  if (state.current_page === go_to_page) { return }
  let post_list = document.querySelectorAll(query_string+" > li");
  let page_number = go_to_page;
  state.current_page = go_to_page;
  console.log(state.current_page);

  post_list.forEach((item) => {
    if (Math.ceil(item.id / state.limit) == page_number) { 
      item.style.display = "block";
    } else { item.style.display = "none"; }
  });
};