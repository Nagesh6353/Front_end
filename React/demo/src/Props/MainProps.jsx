import React from 'react'
import ClassProps from './ClassProps'
import FuncProps from './FuncProps'

export default function MainProps() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Class Props</h1>
                    <ClassProps title="Card 1" desc="Watch" img="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?_gl=1*ijaiq8*_ga*MTE0NTk1NzQ5OC4xNzU5NzUyMjA5*_ga_8JE65Q40S6*czE3NjYwMzU3OTkkbzckZzEkdDE3NjYwMzU4MjQkajM1JGwwJGgw" />
                    <ClassProps title="Card 2" desc="Watch1" img="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?_gl=1*ijaiq8*_ga*MTE0NTk1NzQ5OC4xNzU5NzUyMjA5*_ga_8JE65Q40S6*czE3NjYwMzU3OTkkbzckZzEkdDE3NjYwMzU4MjQkajM1JGwwJGgw" />
                    <ClassProps title="Card 3" desc="Watch2" img="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?_gl=1*ijaiq8*_ga*MTE0NTk1NzQ5OC4xNzU5NzUyMjA5*_ga_8JE65Q40S6*czE3NjYwMzU3OTkkbzckZzEkdDE3NjYwMzU4MjQkajM1JGwwJGgw" />
                    <ClassProps title="Card 4" desc="Watch3" img="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?_gl=1*ijaiq8*_ga*MTE0NTk1NzQ5OC4xNzU5NzUyMjA5*_ga_8JE65Q40S6*czE3NjYwMzU3OTkkbzckZzEkdDE3NjYwMzU4MjQkajM1JGwwJGgw" />
                </div>

                <div className="row">
                    <h1 className="text-center">Function Props</h1>
                    <FuncProps title="car1" desc="Model:2018" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*14iz4ha*_ga*MTE0NTk1NzQ5OC4xNzU5NzUyMjA5*_ga_8JE65Q40S6*czE3NjYwMzU3OTkkbzckZzEkdDE3NjYwMzY2NzIkajU5JGwwJGgw" />
                    <FuncProps title="car2" desc="Model:2022" img="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?_gl=1*c9vh0o*_ga*MTE0NTk1NzQ5OC4xNzU5NzUyMjA5*_ga_8JE65Q40S6*czE3NjYwMzU3OTkkbzckZzEkdDE3NjYwMzY2NzIkajU5JGwwJGgw" />
                    <FuncProps title="car3" desc="Model:2019" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*14iz4ha*_ga*MTE0NTk1NzQ5OC4xNzU5NzUyMjA5*_ga_8JE65Q40S6*czE3NjYwMzU3OTkkbzckZzEkdDE3NjYwMzY2NzIkajU5JGwwJGgw" />
                </div>
            </div>
        </div>
    )
}
