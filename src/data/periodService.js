import Realm from 'realm';

const PeriodSchema = {
  name: 'Period',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    description: 'string',
    period: 'string',
    updated: 'date',
    archived: { type: 'bool', default: false },
  },
};

const repository = new Realm({ schema: [PeriodSchema] });

const generateUuid = () => {
  const chars = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('');
  for (let i = 0, len = chars.length; i < len; i++) {
    switch (chars[i]) {
      case 'x':
        chars[i] = Math.floor(Math.random() * 16).toString(16);
        break;
      case 'y':
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
        break;
      default:
        break;
    }
  }
  return chars.join('');
};

const PeriodService = {
  save: (period) => {
    console.log(period);
    return new Promise((resolve, reject) => {
      try {
        period.id = (period.id == null) ? generateUuid() : period.id;
        period.updated = new Date();
        repository.write(() => {
          const newPeriod = repository.create('Period', period, true);
          console.log('save -> %s', JSON.stringify(newPeriod));
          resolve(newPeriod);
        });
      } catch (e) {
        reject(e);
      }
    });
  },
  archive: (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      try {
        const target = repository.objectForPrimaryKey('Period', id);
        if (target == null) {
          reject(Error('target not found.'));
        }
        repository.write(() => {
          target.archived = true;
          resolve(target);
        });
      } catch (e) {
        reject(e);
      }
    });
  },
  findAllActive: () => repository.objects('Period')
    .filtered('archived == false')
    .sorted('updated', true),
  addChangeListener: (listener) => {
    repository.addListener('change', listener);
  },
  removeListeners: () => {
    repository.removeAllListeners();
  },
};

export default PeriodService;
