import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input placeholder="キーワード検索" type="text" />
            </div>

            <div className="widgets__widgetContainer"></div>
            <h2>いまどうしてる？</h2>

            {/* ライブラリを追加 */}
            <TwitterTweetEmbed
                tweetId={'1652242237005365248'}
            />

            <TwitterTimelineEmbed
                sourceType="profile" screenName="foragooddesign" options={{ height: 400 }} />

            <TwitterShareButton url={"https://twitter.com/foragooddesign"}
                options={{ text: "#React.js勉強中", via: "foragooddesign" }} />
        </div>
    )
}

export default Widgets
