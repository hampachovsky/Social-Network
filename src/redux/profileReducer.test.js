import profileReducer from './profileReducer';
import { addPost, deletePost } from './profileReducer';
//1.test data;
const state = {
  postData: [
    { id: 0, text: 'Hi, man', likeCount: '1' },
    { id: 1, text: 'Hi, guys', likeCount: '4' },
    { id: 2, text: "Hi, i'ts me", likeCount: '5' },
    { id: 3, text: "I'm here", likeCount: '51' },
  ],
};
it('length of posts should be incremented', () => {
  //2. actions:
  let action = addPost('tested post');
  let newState = profileReducer(state, action);
  //3. excpetation:
  expect(newState.postData.length).toBe(5);
});

it('message of new post should be correct', () => {
  //2. actions:
  let action = addPost('tested post');
  let newState = profileReducer(state, action);
  //3. excpetation:
  expect(newState.postData[4].text).toBe('tested post');
});

it('length of posts should be decremented', () => {
  //2. actions:
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  //3. excpetation:
  expect(newState.postData.length).toBe(3);
});

it("after deleting length shouldn't be decremented if id is incorrect", () => {
  //2. actions:
  let action = deletePost(100);
  let newState = profileReducer(state, action);
  //3. excpetation:
  expect(newState.postData.length).toBe(4);
});
