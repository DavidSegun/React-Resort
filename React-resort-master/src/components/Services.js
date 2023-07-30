import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, iure.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless hiking',
        info:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, autem',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, iure.',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, debitis?',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />;
        <div className='services-center'>
          {this.state.services.map((service, index) => (
            <article key={index} className='service'>
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
