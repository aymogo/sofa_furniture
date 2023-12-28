const tabs = document.querySelectorAll(".sec4__Name-item");
const tabsContent = document.querySelectorAll(".sec4__Cards");
const TrendingTabs = document.querySelectorAll(".trending-item");
const TrendingContent = document.querySelectorAll(".trending-items");

const showContent = (elements, tabs, index) => {
  elements.forEach((item, i) => {
    const isActive = i === index;
    item.classList.toggle("ActiveContent", isActive);
    item.classList.toggle("DeActiveContent", !isActive);
  });

  tabs.forEach((item, i) => {
    const isActive = i === index;
    item.classList.toggle("Active-Text", isActive);
    item.classList.toggle("DeActive-Text", !isActive);
  });
};

const hideContent = (elements, tabs) => {
  elements.forEach((item) => {
    item.classList.add("DeActiveContent");
    item.classList.remove("ActiveContent");
  });
  tabs.forEach((item) => {
    item.classList.add("DeActive-Text");
    item.classList.remove("Active-Text");
  });
};

// Tanlangan birinchi tabni Active qiling
showContent(tabsContent, tabs, 0);
showContent(TrendingContent, TrendingTabs, 0);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    hideContent(tabsContent, tabs);
    showContent(tabsContent, tabs, index);
  });
});

TrendingTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    hideContent(TrendingContent, TrendingTabs);
    showContent(TrendingContent, TrendingTabs, index);
  });
});
