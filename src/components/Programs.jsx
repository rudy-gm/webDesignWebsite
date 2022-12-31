import {MdWebStories} from 'react-icons/md'
import {AiFillCaretRight} from 'react-icons/ai'
import {programs} from '../data'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
    <section className='programs'>
        <div className="container progrmas_container">
            <SectionHead icon={<MdWebStories></MdWebStories>} title="Programs"></SectionHead>
        <div className='programs_wrapper'>
            {
                programs.map(({icon,title,info,path,id})=>{
                    return(
                        <Card className="programs_program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className='btn sm'>Learn More <AiFillCaretRight></AiFillCaretRight></Link>
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs