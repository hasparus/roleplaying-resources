import React from "react";
import { render } from "react-dom";
import { css, cx } from "emotion";

import ReactionTable from "./ReactionTable";
import DecisionDieTable from "./DecisionDieTable";
import HundredKnacks from "./HundredKnacks";
import HundredInstincts from "./HundredInstincts";
import RandomEncounterTable from "./RandomEncounterTable";

const styles = css`
  * {
    font-size: 16px;
  }
  p,
  h1,
  span,
  td,
  th,
  li {
    font-family: "Caveat", cursive;
  }
  h1 {
    text-align: center;
    font-weight: bold;
    width: 100%;
    margin: 8px 0;
  }
  table {
    tr th {
      text-align: center;
    }
  }
`;

const Sheet = props => <section className="sheet padding-10mm" {...props} />;

const rowStyles = css`
  display: flex;
  flex-direction: row;
`;
const Row = props => <section className={rowStyles} {...props} />;
const columnStyles = css`
  display: flex;
  flex-direction: column;
`;
const Column = props => <section className={columnStyles} {...props} />;

const webOnlyContainerStyles = css`
  margin: 5mm;
  display: flex;
  justify-content: center;
  text-align: center;

  @media print {
    display: none;
  }
`;

const App = () => (
  <React.Fragment>
    <div className={styles}>
      <header
        className={cx(
          webOnlyContainerStyles,
          css`
            color: black;
          `
        )}
      >
        <span>Przeładuj jak coś wystaje za stronę. Przepraszam 😅🤕</span>
      </header>
      <Sheet>
        <Row>
          <Column>
            <ReactionTable />
            <DecisionDieTable />
          </Column>
          <HundredKnacks />
        </Row>
      </Sheet>
      <Sheet>
        <Row>
          <RandomEncounterTable
            style={{
              flex: 0.4
            }}
          />
          <HundredInstincts />
        </Row>
      </Sheet>
      <footer className={webOnlyContainerStyles}>
        <a href="https://codesandbox.io/s/5z2pmvj5zk">
          <img
            alt="Edit rpg-tables"
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
            style={{
              border: "none",
              borderRadius: 0
            }}
          />
        </a>
      </footer>
    </div>
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
