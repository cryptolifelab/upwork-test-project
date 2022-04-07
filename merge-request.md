


## 🧑‍🚀 My tasks

- For user convenience, I added a loader component that is displayed while the data is being loaded.

- Inside the loader component there is a spinner and the default text is *loading ...* or you can send your text via props message. It would be clearer for users if the loader component had a counter

- Added sorting function, now it is possible to sort by default or priority. The priority in the job component is also shown, for comfortable checking of the task. Then you can usually delete it.

- Added tests for sort function

- For comfortable work of the user, the hook useIfinitescroll is added. Now 5 jobs are displayed first, then as you scroll the page, another 50,000+ are displayed

- If we do not use the useIfinitescroll hook or other optimization options, then with rendering 10000, 50000 + job offers we have a significant delay when drawing the site in the browser. This can be seen in console => network
