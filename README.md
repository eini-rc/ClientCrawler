# CrawlerClient

This project is an Angular application for crawling URLs and displaying the results in a user-friendly way. Follow the instructions below to run the project on your local machine.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js 
- Angular CLI 

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/eini-rc/ClientCrawler.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ClientCrawler
   ```
   
3. Install project dependencies using npm:

   ```bash
   npm i
   ```
   
  ## Running the Application
To start the development server and run the Angular application, run the following command:
```bash
ng serve
```
This will start the development server at http://localhost:4200.

## Crawling URLs
To crawl a URL and retrieve the results, follow these steps:
![image](https://github.com/eini-rc/ClientCrawler/assets/58681300/3098195c-38dc-4e93-87ee-ab2d46b33040)
1. Enter the URL and depth parameters in the input fields provided on the home page.
2. Click the "Crawl" button to initiate the crawling process.
3. The application will check if there are previous results for the provided URL and depth. If previous results exist, they will be displayed. If no previous results are found, a new request will be made to crawl the URLs.

Note: The depth parameter determines how many levels of sub-URLs will be crawled. For example, a depth of 1 will only crawl the main URL, while a depth of 2 will crawl the main URL and its direct sub-URLs.
