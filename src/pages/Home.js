import React from 'react'
import Card from '../components/Card'
import Level from '../components/Level'
import Nav from '../components/Nav'

import './Home.css'

export default () => {
  return (
    <div className="HomePage">
      <Nav />
      <h1>Home</h1>
      <div className="HomePage__services">
        <Card title="Products">
          <p>
            Work that paint. Nice little fluffy clouds laying around in the sky
            being lazy. That's what makes life fun. That you can make these
            decisions. That you can create the world that you want. Here's
            another little happy bush Let's do that again. Anytime you learn
            something your time and energy are not wasted.
          </p>
        </Card>
        <Card title="Services">
          <p>
            These trees are so much fun. I get started on them and I have a hard
            time stopping. Of course he's a happy little stone, cause we don't
            have any other kind. Use what you see, don't plan it. There is no
            right or wrong - as long as it makes you happy and doesn't hurt
            anyone. No worries. No cares. Just float and wait for the wind to
            blow you around. That's crazy.
          </p>
        </Card>
        <Card title="Team">
          <p>
            Clouds are free they come and go as they please. Sometimes you learn
            more from your mistakes than you do from your masterpieces. Making
            all those little fluffies that live in the clouds.
          </p>
        </Card>
      </div>
    </div>
  )
}
