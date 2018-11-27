import React from "react";

const DecisionDie = () => (
  <table>
    <thead>
      <tr>
        <th colSpan="2">Decyzyjna k6-ka</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td width="21">1</td>
        <td width="108">Nie i</td>
      </tr>
      <tr>
        <td width="21">2</td>
        <td width="108">Nie</td>
      </tr>
      <tr>
        <td width="21">3</td>
        <td width="108">Nie, ale</td>
      </tr>
      <tr>
        <td width="21">4</td>
        <td width="108">Tak, ale</td>
      </tr>
      <tr>
        <td width="21">5</td>
        <td width="108">Tak</td>
      </tr>
      <tr>
        <td width="21">6</td>
        <td width="108">Tak i</td>
      </tr>
    </tbody>
  </table>
);

export default DecisionDie;
