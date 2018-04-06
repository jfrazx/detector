export function mapToEntities<T extends Entity>(
  initial: Resource<T>,
  substance: T[]
): Entities<T> {
  return substance.reduce(
    (entities, entity) => {
      return {
        ...entities,
        [entity._id]: entity,
      };
    },
    {
      ...initial.entities,
    }
  );
}

interface Resource<T> {
  entities: Entities<T>;
}

interface Entities<T> {
  [_id: string]: T;
}

interface Entity {
  _id: string;
}
