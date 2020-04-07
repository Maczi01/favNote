import React from "react";
import {storiesOf} from "@storybook/react";
import Card from "./Card";


storiesOf('Card', module)
    .add('Note', () => <Card cardType={'note'}/>)
    .add('Twiter', () => <Card cardType={'twitter'}/>)
    .add('Article', () => <Card cardType={'article'}/>)
