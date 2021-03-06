module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('now()'),
      },
    }, {
      timestamps: false,
    });
  };

/*
    ID 컬럼은 따로 적어줄 필요 없음.
    define 메소드의 3번째인자는 테이블 옵션인데, 여기선 timestamp를 넣었다.
    이게 true면 created_at과 updated_at을 알아서 추가해준다.
*/