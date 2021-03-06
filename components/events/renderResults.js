const renderEventsList = (events) => {
  return events.map((event) => renderEvent(event)).join("");
};

function htmlToElements(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}

const renderEvent = (event) => {
  return `
        <div class="card">
            <div class="card-image">
                <img alt='${event.name} image' src='${event.image}' />
            </div>
            <div class="card-text">
                <h5>${event.name}</h5>
                <div class="card-genre-details">
                    <p class="card-label">${event.venue}</p>
                    <p class="card-label">${event.classification}<br>
                        <div class="card-date">
                        <p>${event.dates.join(" ")}</p>
                        </div>
                    </p>
                </div>
                <div class="card-status-details">${event.status} ${
    event.price.min
  } ${event.price.max}</div>
                </div>
                <div class="buttons-container">
                <button class="button-learnMore" data-event=${encodeURIComponent(
                  JSON.stringify(event)
                )} >Learn more</button>
                <div class="share">
                
                <a href="https://www.facebook.com/sharer.php?u=${
                  event.urlTicket
                }" target="_blank" class="facebook-btn">
                      <i class="fab fa-facebook"></i>
                </a>
                <a https://pinterest.com/pin/create/bookmarklet/?url=${
                  event.urlTicket
                }" target="_blank" class="pinterest-btn">
                      <i class="fab fa-pinterest"></i>
                </a>
                <a href="https://twitter.com/share?url=${
                  event.urlTicket
                }" target="_blank" class="twitter-btn">
                      <i class="fab fa-twitter"></i>
                </a>
                </div>
            </div>
        </div>`;
};

const renderNoResults = () => {
  return "<span>No results found</span>";
};

const renderResults = (events = []) => {
  let html = events.length ? renderEventsList(events) : renderNoResults();

  document.querySelector("#cards-container").append(...htmlToElements(html));
};

export { renderResults };
