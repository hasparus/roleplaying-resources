import React from "react";
import { css } from "emotion";

const styles = css`
  height: 100%;
  display: flex;
  flex-direction column;
  flex-grow: 1;
  ol, ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    li {
      margin-left: 3em;
    }
  }
`;

const WrappedListSection = props => <section className={styles} {...props} />;

export default WrappedListSection;
