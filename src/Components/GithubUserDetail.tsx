import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { RootStore } from "../Store/RootStore";
import { useStore } from "../Hooks/useStore";
import { observer } from "mobx-react-lite";

const GithubUserDetail = observer(() => {
  const {
    rootSotre: { githubDetailStore, countStore },
  } = useStore();
  const [text, setText] = useState("");

  const onClickButton = () => {
    if (text) {
      githubDetailStore.fetchData(text);
    }
  };
  const handleEnter = (e: any) => {
    if (e.keyCode === 13) {
      if (text) {
        githubDetailStore.fetchData(text);
        e.preventDefault();
      }
    }
  };
  const userDetail = githubDetailStore.getUserDetail;
  return (
    <div>
      <div>
        User Location : {userDetail?.location}
        User Name : {userDetail?.name}
        User Id : {userDetail?.id}
        User Url : {userDetail?.url}
        number: {countStore.getCountValue}
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="githubuser">
          <Form.Label>Search Github User</Form.Label>
          <Form.Control
            placeholder="Enter github user name"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
          />
        </Form.Group>
        <Button onClick={onClickButton} variant="primary">
          Search User
        </Button>
      </Form>
    </div>
  );
});

export default GithubUserDetail;
