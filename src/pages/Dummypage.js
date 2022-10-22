import React, {useEffect, useState} from 'react';
import SideStory3 from '../components/homepage/SideStory3';
import SideStoryGroup from '../components/homepage/SideStoryGroup';
import SideStory from '../components/homepage/SideStory';
import {NewEmail, EmptyMid} from '../components/midStory'

export default function Dummypage() {

  return (
    <div className='d-flex justify-content-center py-5 lora'>
      <div className='row' style={{width: "85%"}}>
        <div id="main story body" className='col-12 col-md-9 px-3'>
          <div>
            <div>project/theme name</div>
            <h1 style={{fontSize: "36pt"}}>TITLE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor justo sit.</h1>
            <div className='d-flex justify-content-between pt-2'>
              <div className='text-secondary' style={{fontSize: "10pt"}}>Updated Nov 13, 2022 | Published Nov 5, 2022</div>
              <div className='mx-3'>by <b>Harry Carpenter</b></div>
            </div>
          </div>
          <div className='pt-2'>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt = "picture" style={{width: "100%"}}></img>
            <div className='text-center text-secondary'>image explanation</div>
          </div>
          <div className='p-5 fs-5 pt-3'>
            <div className='my-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacinia libero et porta. Sed aliquet ante et tellus pulvinar porta. Integer urna quam, vulputate eget pharetra ac, tempus quis risus. Nullam vitae dignissim nulla. Proin suscipit placerat quam, non finibus lorem. Sed volutpat nunc quis lacinia ultricies. Sed ac ipsum turpis. Praesent ut orci facilisis, feugiat nibh congue, lacinia erat. Maecenas a risus hendrerit, pharetra nulla quis, ultrices elit.
            </div>
            <div className='my-3'>
              Quisque a nisi molestie, condimentum lectus quis, ullamcorper arcu. Etiam gravida non lacus nec scelerisque. Duis quis massa id mi pulvinar consequat. Aenean pellentesque nec lorem non ornare. Ut augue dui, fringilla id arcu at, vestibulum ultricies tortor. Morbi semper, sapien sit amet commodo elementum, ligula velit pellentesque dui, a tempor nulla lectus et mauris. Duis hendrerit quam malesuada aliquet suscipit. Nunc volutpat lectus a leo volutpat, nec dignissim ante fringilla. Fusce lacinia lacus vitae dui mattis, vel porta quam tincidunt. Sed sed ultricies lorem. Pellentesque ut justo tortor.
            </div>
            <NewEmail/>
            <div className='my-3'>
              In metus sapien, fermentum sit amet luctus in, iaculis vel dolor. Nullam hendrerit, ligula ac volutpat congue, ex sapien ullamcorper magna, ut imperdiet arcu nisl quis sapien. Morbi ut suscipit orci. Nunc facilisis, odio sed blandit tincidunt, sem nisi ultrices arcu, in eleifend risus sem id quam. Nulla faucibus tincidunt tortor. Sed pulvinar venenatis tortor volutpat egestas. Proin dapibus dui quis sem molestie, id facilisis nunc ullamcorper. Donec ultricies consectetur ex, eu fringilla magna posuere ac. Proin quis dui sed mauris venenatis iaculis. Integer commodo orci condimentum nulla pretium, vitae pharetra urna tempus. Curabitur eros lorem, accumsan id lectus maximus, fringilla semper mi. Suspendisse lacus dolor, imperdiet sit amet nunc ac, aliquam mattis lectus. Pellentesque at quam at enim auctor placerat.
            </div>
            <div className='my-3'>
              Nulla consectetur odio sapien, et efficitur eros faucibus ac. Phasellus vel tempus ligula. Aliquam sed lobortis lectus. Curabitur auctor ac enim tincidunt commodo. Suspendisse sed velit neque. Nulla facilisis ac odio at tristique. Curabitur tincidunt a ipsum a hendrerit. Integer porttitor magna vel sem molestie pretium. Maecenas congue vulputate massa, vel sagittis arcu feugiat eu. Curabitur dictum vestibulum leo et ullamcorper. Nunc nulla ligula, varius in aliquet et, iaculis quis eros. Proin rutrum efficitur leo ac tempor. Nullam placerat condimentum feugiat.
            </div>
            <div className='my-3'>
              Ut tristique fringilla massa, a accumsan sem tristique non. Quisque blandit blandit leo, eget molestie diam convallis et. Vestibulum imperdiet tortor porta, sollicitudin nisi vitae, interdum sem. Pellentesque id mi sed arcu hendrerit dictum vel a orci. Quisque rhoncus diam eget purus ultricies efficitur. Aliquam accumsan lectus a libero dapibus facilisis. Vivamus ligula sapien, fermentum a eleifend a, rutrum nec mi. Vivamus vel consectetur tortor, quis faucibus nunc. Nunc felis quam, interdum vitae commodo non, maximus quis quam. Sed molestie ante vitae euismod luctus.
            </div>

          </div>
          <div className='d-flex justify-content-end'> <div>by <b>Harry Carpenter</b></div></div>
          
        </div>
        <div className='col-12 col-md-3 px-2 side-story'>
          <SideStoryGroup groups = {[
            <SideStory src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"}/>,
            <SideStory3 src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"}/>,
            <SideStory3 src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"}/>,
            <SideStory3 src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"}/>,
            <SideStory3 src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"}/>,
            <SideStory3 src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"}/>
          ]}/>
          
        </div>
        
      </div>
    </div>
  )
}
