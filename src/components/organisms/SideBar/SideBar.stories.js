import React from "react";
import {storiesOf} from "@storybook/react";
import SideBar from "./SideBar";
import StoryRouter from 'storybook-react-router';

storiesOf('Organisms/Sidebar', module)
    .addDecorator(StoryRouter())
    .add('Normal', () => <SideBar/>)
