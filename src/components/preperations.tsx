import {useEffect, useState} from 'react';
import SanityClient from '../client';
import image from '../rp.png'
import { Card, Tooltip } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import AspectRatio from '@mui/joy/AspectRatio';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Loader } from '../utils/commonComponents';

function Preperations() {

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  
  useEffect(() => {
    setLoading(true);
    SanityClient.fetch(
      `*[_type == "subjects"]
        {
          title,
          slug,
          description,
          image{
              asset->{
                  _id,
                  url
              }
          },
        }
      `
    ).then((data) => {
      // console.log('data', data)
      setSubjects(data);
      setLoading(false);
    }).catch((error) => {
        console.log('error', error)
        setLoading(false);
    })
  }, []);

  if(loading) {
    return(
      <div className='min-h-screen bg-blue-100 w-full'>
        <Loader open={loading} />
      </div>
    )
  } else {
    return (
      <main className='min-h-screen p-12'>
        <section className='container mx-auto'>
          <h1 className='text-5xl flex justify-center cursive'>Subjects</h1>
          <h2 className='text-lg text-gray-600 flex justify-center mb-12 my-3'>Subjects you can go through</h2>
          <div className={'grid md:grid-cols-2 lg:gid-cols-3 gap-6 my-2'}>
            {subjects.map((subject:any, index:number) => {
              return(
                <Tooltip
                  title={`click this to see all ${subject?.title} notes`}
                  placement="top"
                >
                  <Card
                    className={
                      isTabletOrMobile ?
                        'container mx-auto bg-red-700 border-l-8 border-blue-900 hover:drop-shadow-2xl hover:border-red-800 my-4' :
                        'container mx-auto bg-red-700 border-l-8 border-blue-900 hover:drop-shadow-2xl hover:border-red-800 my-4'
                    }
                    key={index}
                  >
                    <Link to={"/subject/" + subject?.slug.current} key={subject?.slug?.current}>
                      <CardActionArea>
                        <AspectRatio minHeight="120px" maxHeight="200px" sx={{}}>
                          <CardMedia
                            className='bg-blue-400 w-full'
                            image={image}
                            title="Contemplative Reptile"
                          >
                            <div>
                              <img
                                src={subject?.image?.asset?.url}
                                alt={'NA'}
                                className={'h-30 w-40 rounded-2xl'}
                              />
                            </div>
                          </CardMedia>
                        </AspectRatio>
                        <CardContent>
                          <Typography gutterBottom variant='h5' component="h2">
                            <b>{subject?.title}</b>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {subject?.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </Tooltip>
              )
            })}
          </div>
        </section>
      </main>
    )
  }
}

export default Preperations;
