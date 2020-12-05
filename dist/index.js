"use strict";
function appendArticle() {
    fetch("https://fanaroengineering.github.io/fanaro.io/articles/test.html")
        .then((response) => response.text())
        .then((htmlAsString) => {
        const parser = new DOMParser();
        const articleDocument = parser.parseFromString(htmlAsString, "text/html");
        console.log("inside append");
        const article = articleDocument.querySelector("article");
        document.body.append(article);
    });
}
document.onclick = ((_) => {
    console.log("before append");
    appendArticle();
    console.log("after append");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsYUFBYTtJQUNwQixLQUFLLENBQUMsa0VBQWtFLENBQUM7U0FDdEUsSUFBSSxDQUFDLENBQUMsUUFBa0IsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdDLElBQUksQ0FBQyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtRQUM3QixNQUFNLE1BQU0sR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRTFDLE1BQU0sZUFBZSxHQUFhLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXBGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0IsTUFBTSxPQUFPLEdBQWdCLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFFLENBQUM7UUFFdkUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBR0QsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBYSxFQUFFLEVBQUU7SUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3QixhQUFhLEVBQUUsQ0FBQztJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDIn0=