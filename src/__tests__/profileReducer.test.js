import profileReducer from 'redux/profileReducer';
import { addPost, deletePost } from 'redux/profileReducer';
//1.test data;
const state = {
  postData: [
    { id: 0, text: 'Hi, man', likeCount: '1' },
    { id: 1, text: 'Hi, guys', likeCount: '4' },
    { id: 2, text: "Hi, i'ts me", likeCount: '5' },
    { id: 3, text: "I'm here", likeCount: '51' },
  ],
};
describe('profile reducer', () => {
  it('length of posts should be incremented', () => {
    //2. actions:
    const action = addPost('tested post');
    const newState = profileReducer(state, action);
    //3. excpetation:
    expect(newState.postData.length).toBe(5);
  });

  it('message of new post should be correct', () => {
    const action = addPost('tested post');
    const newState = profileReducer(state, action);

    expect(newState.postData[4].text).toBe('tested post');
  });

  it('length of posts should be decremented', () => {
    const action = deletePost(1);
    const newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(3);
  });

  it("after deleting length shouldn't be decremented if id is incorrect", () => {
    const action = deletePost(100);
    const newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
  });
});
