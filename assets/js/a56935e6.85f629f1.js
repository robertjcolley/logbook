"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[6334],{8921:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/02/24/what-is-my-plan","metadata":{"permalink":"/logbook/blog/2022/02/24/what-is-my-plan","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-24-what-is-my-plan.md","source":"@site/blog/2022-02-24-what-is-my-plan.md","title":"What is my plan?","description":"Often times you get asked about \\"What is your 5 year plan?\\" and I have NO idea about specifics.","date":"2022-02-24T00:00:00.000Z","formattedDate":"February 24, 2022","tags":[],"readingTime":1.6,"truncated":false,"authors":[],"nextItem":{"title":"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit","permalink":"/logbook/blog/2022/02/23/building-viro"}},"content":"Often times you get asked about \\"What is your 5 year plan?\\" and I have NO idea about specifics.\\r\\n\\r\\nAs of right now, I know:\\r\\n\\r\\n## 1. I want to start my own business\\r\\n\\r\\nI know I can run a successful business. I am very detail oriented and I have a lot of experience \\"running\\" a team to create a product. I have made mistakes and have been overextended, but with one sole product and enough time, I know that I can create a product that will be successful.\\r\\n\\r\\n## 2. I might need to go back to school to get an MBA\\r\\n\\r\\nI don\'t know everything I need to know to start a good business. I can create a decent software product, but I don\'t know how to create a successful business from a software product.\\r\\n\\r\\n## 3. I don\'t have a good idea for a business that I want to commit to\\r\\n\\r\\nOne of the ideas I\'ve had before is a \\"social wellness\\" platform. It would be very similar to [NextStep GoodLife](https://nextstepgoodlife.com), but I don\'t really want to make another social media app. I\'ve thought about making a fitness tracking app, but that is a super saturated market and I don\'t want to be in it. I thought about \\"party tech\\" but there isn\'t a huge market for scalability - just frat bros and sorority girls in that market. That would include party planning apps, which is somewhat niche. I\'ve also thought about creating a javascript teaching platform, something in crypto, or something else entirely.\\r\\n\\r\\nEesha had an idea to see everything about her health records in one place by connecting portals together. I don\'t know how to monetize this.\\r\\n\\r\\nTLDR; Ideas list:\\r\\n\\r\\n- Create a social wellness platform\\r\\n- Create a fitness tracking app\\r\\n- Create a party planning app\\r\\n- Create a teaching platform\\r\\n- Create a something in crypto\\r\\n- Create a health records app"},{"id":"/2022/02/23/building-viro","metadata":{"permalink":"/logbook/blog/2022/02/23/building-viro","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-23-building-viro.md","source":"@site/blog/2022-02-23-building-viro.md","title":"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit","description":"I am assuming that you have your directories set up with viro, virocore and the starter-kit as follows:","date":"2022-02-23T00:00:00.000Z","formattedDate":"February 23, 2022","tags":[],"readingTime":1.505,"truncated":false,"authors":[],"prevItem":{"title":"What is my plan?","permalink":"/logbook/blog/2022/02/24/what-is-my-plan"},"nextItem":{"title":"Adding back GVR on iOS for Viro","permalink":"/logbook/blog/2022/02/22/gvr-ios"}},"content":"I am assuming that you have your directories set up with `viro`, `virocore` and the `starter-kit` as follows:\\r\\n\\r\\n![directories](/img/blog/2022-02-23-building-viro/directories.png)\\r\\n\\r\\n## 1. Build ViroCore\\r\\n\\r\\n### (iOS) Building the renderer to be used in react-viro platform\\r\\n\\r\\n### 1.1. Make sure you followed through steps 1 - 3 mentioned in the android section\\r\\n\\r\\n### 1.2. Execute the following commands to install pods from `Podfile`\\r\\n\\r\\n```bash\\r\\n# in virocore/\\r\\ncd ios\\r\\npod install\\r\\n```\\r\\n\\r\\n### 1.3. Open `ViroRenderer.xcworkspace` in Xcode. Build scheme `ViroKit` with Build Configuration set to `Release` and target set to `Generic iOS Device`.\\r\\n\\r\\n![directories](/img/blog/2022-02-23-building-viro/virocore.png)\\r\\n\\r\\n**Note:**\\r\\n\\r\\nIf you want the ability to run on Simulator, change target to any of the `iOS Simulator` targets instead of `Generic iOS Device`. If the Xcode build succeeded, you should see a bunch of new files copied over in `viro/ios/dist/` folder in the viro repo you cloned earlier.\\r\\n\\r\\n## 2. Build ViroReact\\r\\n\\r\\n### 2.1. Execute the following commands to install pods from `Podfile`\\r\\n\\r\\n```bash\\r\\n# in viro/\\r\\ncd ios\\r\\npod install\\r\\n```\\r\\n\\r\\n### 2.2. Open `ViroReact.xcworkspace` in Xcode. Build scheme `ViroReact` with Build Configuration set to `Release` and target set to `Generic iOS Device`.\\r\\n\\r\\n![directories](/img/blog/2022-02-23-building-viro/viroreact.png)\\r\\n\\r\\nThis should generate more files in the ios/dist/ folder.\\r\\n\\r\\n### 2.3. Install pods\\r\\n\\r\\nI don\'t know if this is required, but I\'m doing it anyways\\r\\n\\r\\n```bash\\r\\n# in viro/\\r\\ncd ios\\r\\npod install\\r\\n```\\r\\n\\r\\n### 2.4. Bundle the ViroReact project into a tarball\\r\\n\\r\\n```bash\\r\\nyarn bundle\\r\\n```\\r\\n\\r\\n## 3. Use in starter kit\\r\\n\\r\\n### 3.1. Clear the yarn cache of the tarball\\r\\n\\r\\n```bash\\r\\n# I know, this cleans the entire cache. \\r\\n# yarn cache clean @viro-community/react-viro doesn\'t properly clear the tarball from the cache.\\r\\nyarn cache clean\\r\\n```\\r\\n\\r\\n### 3.2. install dependencies\\r\\n\\r\\n```bash\\r\\n# in starter-kit/\\r\\nyarn install\\r\\n\\r\\nyarn add ../viro/viro-community-react-viro-<version>.tgz\\r\\n\\r\\ncd ios\\r\\npod install\\r\\n```\\r\\n\\r\\n### 3.3. Run the starter kit"},{"id":"/2022/02/22/gvr-ios","metadata":{"permalink":"/logbook/blog/2022/02/22/gvr-ios","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-22-gvr-ios.md","source":"@site/blog/2022-02-22-gvr-ios.md","title":"Adding back GVR on iOS for Viro","description":"VR was removed on iOS in the last few months, but it\'s still a huge part of the ecosystem. This is supported on Android, and we\'re working on adding it back to iOS. This entry records my progress and troubleshooting.","date":"2022-02-22T00:00:00.000Z","formattedDate":"February 22, 2022","tags":[],"readingTime":0.845,"truncated":false,"authors":[],"prevItem":{"title":"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit","permalink":"/logbook/blog/2022/02/23/building-viro"},"nextItem":{"title":"Building @viro-community/react-viro package","permalink":"/logbook/blog/2022/02/13/building-viro"}},"content":"VR was removed on iOS in the last few months, but it\'s still a huge part of the ecosystem. This is supported on Android, and we\'re working on adding it back to iOS. This entry records my progress and troubleshooting.\\r\\n\\r\\n## PR\\r\\n\\r\\nThe pull request is [here](https://github.com/ViroCommunity/viro/pull/73). I had to filter .pngs, .strings, and .bin files out of the PR so I could even load the page. This PR is a bit of a mess and I think there is work which has already been done which is duplicated here. `static_lib/` has already been removed.\\r\\n\\r\\n## Looking around\\r\\n\\r\\nThere is some commented out code\\r\\n\\r\\n## Discussion with Ed\\r\\n\\r\\n### Todo\\r\\n\\r\\n1. Rebuild virocore\\r\\n\\r\\n[https://github.com/ViroCommunity/virocore#ios-building-the-renderer-to-be-used-in-react-viro-platform](building virocore to be used in react-viro).\\r\\n\\r\\n- [ ] Having trouble doing this. It seems that ios/dist does not get completely regenerated when ViroKit is rebuilt. I\'m not sure why!\\r\\n\\r\\n\\r\\n2. uncomment references\\r\\n\\r\\n- [x] should be done!\\r\\n\\r\\n3. Distribute virocore with cocoa pods\\r\\n\\r\\nThis is the part to figure out.\\r\\n\\r\\n- https://cocoapods.org/\\r\\n- https://guides.cocoapods.org/making/getting-setup-with-trunk.html"},{"id":"/2022/02/13/building-viro","metadata":{"permalink":"/logbook/blog/2022/02/13/building-viro","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-13-building-viro.md","source":"@site/blog/2022-02-13-building-viro.md","title":"Building @viro-community/react-viro package","description":"The first major change I had to make was to add react native as a dev dependency. Android will not build correctly without it.","date":"2022-02-13T00:00:00.000Z","formattedDate":"February 13, 2022","tags":[],"readingTime":0.765,"truncated":false,"authors":[],"prevItem":{"title":"Adding back GVR on iOS for Viro","permalink":"/logbook/blog/2022/02/22/gvr-ios"},"nextItem":{"title":"Developing with ViroCommunity/viro Locally","permalink":"/logbook/blog/2022/02/13/develop-with-viro-locally"}},"content":"The first major change I had to make was to add react native as a dev dependency. Android will not build correctly without it.\\r\\n\\r\\nAfter sifting around through the build.gradle, settings.gradle, and android/build.gradle files, I had a realization that there might be certain parts of the android project that are put into different places when the ./prepare_release.sh script is run.\\r\\n\\r\\nThe next AHA! moment was when I realized that I can install a dependency from a tarball. The package.json for the starter kit looks slightly different:\\r\\n\\r\\n```json\\r\\n\\"dependencies\\": {\\r\\n  \\"@viro-community/react-viro\\": \\"../viro/viro-community-react-viro-2.22.0.tgz\\",\\r\\n  \\"fsevents\\": \\"^2.3.2\\",\\r\\n  \\"react\\": \\"17.0.2\\",\\r\\n  \\"react-native\\": \\"0.65.1\\"\\r\\n}\\r\\n```\\r\\n\\r\\ninstead of:\\r\\n\\r\\n```json\\r\\n\\"dependencies\\": {\\r\\n  \\"@viro-community/react-viro\\": \\"../viro\\",\\r\\n  \\"fsevents\\": \\"^2.3.2\\",\\r\\n  \\"react\\": \\"17.0.2\\",\\r\\n  \\"react-native\\": \\"0.65.1\\"\\r\\n},\\r\\n```\\r\\n\\r\\nThis tarball puts everything into the right spot for a local installation, and then the starter-kit builds on android! I had to add the dist folder for the generated JS files so that `npm pack` would get everything needed."},{"id":"/2022/02/13/develop-with-viro-locally","metadata":{"permalink":"/logbook/blog/2022/02/13/develop-with-viro-locally","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-13-develop-with-viro-locally.md","source":"@site/blog/2022-02-13-develop-with-viro-locally.md","title":"Developing with ViroCommunity/viro Locally","description":"1. Set up ViroCommunity/viro","date":"2022-02-13T00:00:00.000Z","formattedDate":"February 13, 2022","tags":[],"readingTime":0.985,"truncated":false,"authors":[],"prevItem":{"title":"Building @viro-community/react-viro package","permalink":"/logbook/blog/2022/02/13/building-viro"},"nextItem":{"title":"RFC and RFT: Expo Starter Kit Instructions","permalink":"/logbook/blog/2022/02/13/expo-starter-kit-instructions"}},"content":"## 1. Set up ViroCommunity/viro\\r\\n\\r\\n### 1.1. Clone ViroCommunity/viro repo\\r\\n\\r\\n```bash\\r\\ngh repo clone ViroCommunity/viro\\r\\n```\\r\\n\\r\\n### 1.2. Install dependencies\\r\\n\\r\\n```bash\\r\\ncd viro\\r\\nnpm install\\r\\n```\\r\\n\\r\\n## 2. Set up the Starter Kit\\r\\n\\r\\n### 2.1. Clone the starter kit\\r\\n\\r\\n```bash\\r\\ngh repo clone ViroCommunity/starter-kit\\r\\n```\\r\\n\\r\\n### 2.2. Install dependencies\\r\\n\\r\\n```bash\\r\\ncd starter-kit\\r\\nnpm install\\r\\n```\\r\\n\\r\\n## 3. (optional) Make changes viro\\r\\n\\r\\nMake changes to the `viro` folder to fix a bug, add something new, etc.\\r\\n\\r\\n## 4. Build viro\\r\\n\\r\\nEnsure that your typescript compiles by running the build command.\\r\\n\\r\\n```bash\\r\\n# from viro/\\r\\nnpm run build\\r\\n```\\r\\n\\r\\n## 5. Run the \\"prepare_release.sh\\" script\\r\\n\\r\\nThis script will create a tarball of the files and binaries needed in the viro folder for the dependency to work correctly.\\r\\n\\r\\n```bash\\r\\n# from viro/\\r\\n./prepare_release.sh\\r\\n```\\r\\n\\r\\nYou should have a tarball in the viro folder called `viro-community-react-viro-<package.json version>.tgz`.\\r\\n\\r\\n## 6. Install the tarball\\r\\n\\r\\n```bash\\r\\ncd starter-kit\\r\\nnpm install ../viro/viro-community-react-viro-<package.json version>.tgz\\r\\n```\\r\\n\\r\\n## 7. Build the starter kit\\r\\n\\r\\n### iOS\\r\\n\\r\\nIf developing on ios, run `pod install` in the `ios` folder and then run the starter kit from xCode.\\r\\n\\r\\n### Android\\r\\n\\r\\nIf developing on android, run `npm run android` with a device connected."},{"id":"/2022/02/13/expo-starter-kit-instructions","metadata":{"permalink":"/logbook/blog/2022/02/13/expo-starter-kit-instructions","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-13-expo-starter-kit-instructions.md","source":"@site/blog/2022-02-13-expo-starter-kit-instructions.md","title":"RFC and RFT: Expo Starter Kit Instructions","description":"Hey everyone! I\'d like to start testing the expo plugin. I\'ve attached a tarball of the repo, and I\'d like our testers to follow these instructions and make sure that everything works correctly.","date":"2022-02-13T00:00:00.000Z","formattedDate":"February 13, 2022","tags":[],"readingTime":2.17,"truncated":false,"authors":[],"prevItem":{"title":"Developing with ViroCommunity/viro Locally","permalink":"/logbook/blog/2022/02/13/develop-with-viro-locally"},"nextItem":{"title":"Jest: Flush Promises and Timers with Snapshot Tests","permalink":"/logbook/blog/2022/01/24/jest-flush-snapshot-timers"}},"content":"Hey everyone! I\'d like to start testing the expo plugin. I\'ve attached a tarball of the repo, and I\'d like our testers to follow these instructions and make sure that everything works correctly.\\r\\n\\r\\nSpecifically, I\'d like to test the following:\\r\\n\\r\\n- iOS: M1 Mac\\r\\n- iOS: Intel Mac\\r\\n- Android\\r\\n- Android with non-default configuration (https://github.com/ViroCommunity/viro/pull/88#discussion_r805226852)\\r\\n\\r\\n## Instructions\\r\\n\\r\\n### 1. Create a new expo project\\r\\n\\r\\n```bash\\r\\nexpo init my-project\\r\\n```\\r\\n\\r\\n### 2. Install downloaded tarball as a dependency to the project\\r\\n\\r\\nI would recommend keeping the tarball close to the project folder.\\r\\n\\r\\n#### 2.1. NPM\\r\\n\\r\\n```bash\\r\\nnpm install --save ../path/to/viro-community-react-viro-2.22.0.tgz\\r\\n```\\r\\n\\r\\n#### 2.2. Yarn\\r\\n\\r\\n```bash\\r\\nyarn add ../path/to/viro-community-react-viro-2.22.0.tgz\\r\\n```\\r\\n\\r\\n### 3. Add the plugin to app.json\\r\\n\\r\\n```json\\r\\n\\"plugins\\": [ \\"@viro-community/react-viro\\" ]\\r\\n```\\r\\n\\r\\nOR if testing [Android with non-default configuration](https://github.com/ViroCommunity/viro/pull/88#discussion_r805226852)\\r\\n\\r\\n```json\\r\\n\\"plugins\\": [\\r\\n  [\\r\\n    \\"@viro-community/react-viro\\",\\r\\n    {\\r\\n      \\"androidXrMode\\": \\"GVR\\"\\r\\n    }\\r\\n  ]\\r\\n],\\r\\n```\\r\\n\\r\\n### 4. Generate the ios/android folders\\r\\n\\r\\n#### 4.1. iOS\\r\\n\\r\\n`expo run:ios` will generate the ios/ folder and will run `pod install` in the project.\\r\\n\\r\\n```bash\\r\\nexpo run:ios -d <device id | device name>\\r\\n```\\r\\n\\r\\n#### 4.2. Android\\r\\n\\r\\n```bash\\r\\nexpo run:android\\r\\n```\\r\\n\\r\\n### 5. Add changes which use the viro library\\r\\n\\r\\nReplace the contents of App.tsx with the following:\\r\\n\\r\\n```js\\r\\nimport React, {useState} from \'react\';\\r\\nimport {StyleSheet} from \'react-native\';\\r\\nimport {\\r\\n  ViroARScene,\\r\\n  ViroText,\\r\\n  ViroConstants,\\r\\n  ViroARSceneNavigator,\\r\\n} from \'@viro-community/react-viro\';\\r\\n\\r\\nconst HelloWorldSceneAR = () => {\\r\\n  const [text, setText] = useState(\'Initializing AR...\');\\r\\n\\r\\n  function onInitialized(state, reason) {\\r\\n    console.log(\'guncelleme\', state, reason);\\r\\n    if (state === ViroConstants.TRACKING_NORMAL) {\\r\\n      setText(\'Hello World!\');\\r\\n    } else if (state === ViroConstants.TRACKING_NONE) {\\r\\n      // Handle loss of tracking\\r\\n    }\\r\\n  }\\r\\n\\r\\n  return (\\r\\n    <ViroARScene onTrackingUpdated={onInitialized}>\\r\\n      <ViroText\\r\\n        text={text}\\r\\n        scale={[0.5, 0.5, 0.5]}\\r\\n        position={[0, 0, -1]}\\r\\n        style={styles.helloWorldTextStyle}\\r\\n      />\\r\\n    </ViroARScene>\\r\\n  );\\r\\n};\\r\\n\\r\\nexport default () => {\\r\\n  return (\\r\\n    <ViroARSceneNavigator\\r\\n      autofocus={true}\\r\\n      initialScene={{\\r\\n        scene: HelloWorldSceneAR,\\r\\n      }}\\r\\n      style={styles.f1}\\r\\n    />\\r\\n  );\\r\\n};\\r\\n\\r\\nvar styles = StyleSheet.create({\\r\\n  f1: {flex: 1},\\r\\n  helloWorldTextStyle: {\\r\\n    fontFamily: \'Arial\',\\r\\n    fontSize: 30,\\r\\n    color: \'#ffffff\',\\r\\n    textAlignVertical: \'center\',\\r\\n    textAlign: \'center\',\\r\\n  },\\r\\n});\\r\\n\\r\\n```\\r\\n\\r\\n### 6. Build and run the project\\r\\n\\r\\n#### 6.1. iOS\\r\\n\\r\\nThe iOS instructions are different than the Android instructions because run:ios does not build and run on a physical device. If using a physical device, you might have to configure code signing. I was able to do this by choosing my personal team (not a paid developer account) and removing the push notifications capability. I did have to go into settings to trust the developer certificate, but you shouldn\'t have this problem if you have a paid developer account. This is found in `Settings --\x3e General --\x3e VPN & Device Management`.\\r\\n\\r\\n![Screenshot](/img//blog/expo.png)\\r\\n\\r\\n```bash\\r\\nexpo run:ios -d <my device id | device name>\\r\\n```\\r\\n\\r\\n#### 6.2. Android\\r\\n\\r\\n```bash\\r\\nexpo run:android\\r\\n```"},{"id":"/2022/01/24/jest-flush-snapshot-timers","metadata":{"permalink":"/logbook/blog/2022/01/24/jest-flush-snapshot-timers","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-01-24-jest-flush-snapshot-timers.md","source":"@site/blog/2022-01-24-jest-flush-snapshot-timers.md","title":"Jest: Flush Promises and Timers with Snapshot Tests","description":"I got a warning error which looked like:","date":"2022-01-24T00:00:00.000Z","formattedDate":"January 24, 2022","tags":[],"readingTime":0.68,"truncated":false,"authors":[],"prevItem":{"title":"RFC and RFT: Expo Starter Kit Instructions","permalink":"/logbook/blog/2022/02/13/expo-starter-kit-instructions"},"nextItem":{"title":"Jest: Accurate Snapshots When Loading from UseEffect","permalink":"/logbook/blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data"}},"content":"I got a warning error which looked like:\\r\\n\\r\\n```error\\r\\nWarning: It looks like you\'re using the wrong act() around your test interactions.\\r\\nBe sure to use the matching version of act() corresponding to your renderer:\\r\\n\\r\\n// for react-dom:\\r\\nimport {act} from \'react-dom/test-utils\';\\r\\n// ...\\r\\nact(() => ...);\\r\\n\\r\\n// for react-test-renderer:\\r\\nimport TestRenderer from \'react-test-renderer\';\\r\\nconst {act} = TestRenderer;\\r\\n// ...\\r\\nact(() => ...);\\r\\n```\\r\\n\\r\\nthat has also been documented [here](https://github.com/testing-library/react-hooks-testing-library/issues/516). I was able to fix this by adding a similar function `flushPromisesAndTimersForSnapshot()` and the error messages went away.\\r\\n\\r\\n```typescript\\r\\nimport { act } from \'@testing-library/react\';\\r\\nimport renderer from \'react-test-renderer\';\\r\\n\\r\\nexport function flushPromisesAndTimers() {\\r\\n  return act(\\r\\n    () =>\\r\\n      new Promise((resolve) => {\\r\\n        setTimeout(resolve, 500);\\r\\n        jest.runAllTimers();\\r\\n      })\\r\\n  );\\r\\n}\\r\\n\\r\\nexport function flushPromisesAndTimersForSnapshot() {\\r\\n  return renderer.act(\\r\\n    () =>\\r\\n      new Promise((resolve) => {\\r\\n        setTimeout(resolve, 500);\\r\\n        jest.runAllTimers();\\r\\n      })\\r\\n  );\\r\\n}\\r\\n```"},{"id":"/2022/01/20/jest-fixing-bad-snapshots-when-loading-data","metadata":{"permalink":"/logbook/blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-01-20-jest-fixing-bad-snapshots-when-loading-data.md","source":"@site/blog/2022-01-20-jest-fixing-bad-snapshots-when-loading-data.md","title":"Jest: Accurate Snapshots When Loading from UseEffect","description":"I had a useEffect which fetched data, and I noticed that the snapshot showed the loading spinner when the data was being fetched. I was able to fix this by adding flushPromisesAndTimers() before waitFor() a testID detection. The component looked something like this:","date":"2022-01-20T00:00:00.000Z","formattedDate":"January 20, 2022","tags":[],"readingTime":1.07,"truncated":false,"authors":[],"prevItem":{"title":"Jest: Flush Promises and Timers with Snapshot Tests","permalink":"/logbook/blog/2022/01/24/jest-flush-snapshot-timers"},"nextItem":{"title":"Jest: String Matching (Use RegEx)","permalink":"/logbook/blog/2022/01/19/jest-using-regex-in-string-matching"}},"content":"I had a useEffect which fetched data, and I noticed that the snapshot showed the loading spinner when the data was being fetched. I was able to fix this by adding `flushPromisesAndTimers()` before `waitFor()` a testID detection. The component looked something like this:\\r\\n\\r\\n```tsx\\r\\nexport default function Component(props: Props) {\\r\\n  const [error, setError] = useState<null | Error>(null);\\r\\n  const [data, setData] = useState(null);\\r\\n  const [loading, setLoading] = useState(true);\\r\\n\\r\\n  useEffect(() => {\\r\\n    const setup = async () => {\\r\\n      setLoading(true);\\r\\n      try {\\r\\n        const newData = await fetch(\'path/to/data\');\\r\\n        setData(newData);\\r\\n      } catch (newError) {\\r\\n        setError(newError as Error);\\r\\n        handleError(newError as Error);\\r\\n      } finally {\\r\\n        setLoading(false);\\r\\n      }\\r\\n    };\\r\\n\\r\\n    setup();\\r\\n  }, []);\\r\\n\\r\\n  if (loading || !data) {\\r\\n    return (\\r\\n      <View style={[styles.container, styles.loading]}>\\r\\n        <Loading />\\r\\n      </View>\\r\\n    );\\r\\n  }\\r\\n\\r\\n  return (\\r\\n    <View style={styles.container} testID=\\"ComponentTestID\\">\\r\\n      <Text>{data}</Text>\\r\\n    </View>\\r\\n  );\\r\\n}\\r\\n\\r\\n```\\r\\n\\r\\nand the test looked like this:\\r\\n\\r\\n```typescript\\r\\ntest(\'should render correctly\', async () => {\\r\\n  const tree = create(\\r\\n    <Component />\\r\\n  );\\r\\n\\r\\n  await flushPromisesAndTimers();\\r\\n\\r\\n  await waitFor(() => {\\r\\n    expect(tree.toJSON()).toMatchSnapshot();\\r\\n  });\\r\\n});\\r\\n```\\r\\n\\r\\nMy flush promises and timers function is from [this issue](https://github.com/facebookexperimental/Recoil/pull/1463) and listed on the [recoil docs](https://recoiljs.org/docs/guides/testing/#testing-recoil-state-with-asyncronous-queries-inside-of-a-react-component) and looks like this:\\r\\n\\r\\n```typesript\\r\\n/**\\r\\n * flushes promises and timers\\r\\n *\\r\\n * @export\\r\\n * @return {*}\\r\\n */\\r\\nexport function flushPromisesAndTimers() {\\r\\n  return act(\\r\\n    () =>\\r\\n      new Promise((resolve) => {\\r\\n        setTimeout(resolve, 500);\\r\\n        jest.runAllTimers();\\r\\n      })\\r\\n  );\\r\\n}\\r\\n```"},{"id":"/2022/01/19/jest-using-regex-in-string-matching","metadata":{"permalink":"/logbook/blog/2022/01/19/jest-using-regex-in-string-matching","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-01-19-jest-using-regex-in-string-matching.md","source":"@site/blog/2022-01-19-jest-using-regex-in-string-matching.md","title":"Jest: String Matching (Use RegEx)","description":"While trying to use result.getByText() to find a component, I found that it was not working. My test case was a regression test to make sure that a component could not say \\"1 providers.\\" The component looked like:","date":"2022-01-19T00:00:00.000Z","formattedDate":"January 19, 2022","tags":[],"readingTime":0.605,"truncated":false,"authors":[],"prevItem":{"title":"Jest: Accurate Snapshots When Loading from UseEffect","permalink":"/logbook/blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data"}},"content":"While trying to use `result.getByText()` to find a component, I found that it was not working. My test case was a regression test to make sure that a component could not say \\"1 providers.\\" The component looked like:\\r\\n\\r\\n```tsx\\r\\n <Typography\\r\\n  variant=\\"caption\\"\\r\\n  color=\\"textSecondary\\"\\r\\n  data-testid=\\"approved-by-provider-count\\"\\r\\n>\\r\\n  {t(\'Approved by\')} {abbrNum(supporters.length, 1)}{\' \'}\\r\\n  {supporters.length === 1 ? t(\'provider\') : t(\'providers\')}\\r\\n</Typography>\\r\\n```\\r\\n\\r\\nand the snapshot was:\\r\\n\\r\\n```html\\r\\n<span\\r\\n  class=\\"MuiTypography-root MuiTypography-caption MuiTypography-colorTextSecondary\\"\\r\\n  data-testid=\\"approved-by-provider-count\\">\\r\\n    Approved by\\r\\n\\r\\n    1\\r\\n\\r\\n    provider\\r\\n</span>  \\r\\n```\\r\\n\\r\\nI couldn\'t figure out the newlines and spaces in my expect statement. I tried to use a regex to match the string, and it worked correctly! `/s` matches any whitespace character, including newlines.\\r\\n\\r\\n```typescript\\r\\nconst expected = /Approved by\\\\s*1\\\\s*provider/;\\r\\nconst expected1 = /Approved by\\\\s*1\\\\s*providers/;\\r\\nexpect(result.queryByText(expected1)).not.toBeInTheDocument();\\r\\nexpect(result.getByText(expected)).toBeInTheDocument();\\r\\n```"}]}')}}]);