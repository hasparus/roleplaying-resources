import React from "react";

const RandomEncounterTable = props => (
  <table {...props}>
    <thead>
      <tr>
        <th colSpan="2">Spotkanie Losowe</th>
      </tr>
      <tr>
        <th>k6</th>
        <th>wynik</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Wydarzenie</td>
      </tr>
      <tr>
        <td>2-5</td>
        <td>Nic</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Istota</td>
      </tr>
    </tbody>
  </table>
);

export default RandomEncounterTable;
